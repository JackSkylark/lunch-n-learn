const formatPrice = (num: any, symbol = "$") =>  
  `${symbol}${num.toFixed(2)}`;

formatPrice("1234"); // This will cause a runtime error.


const formatPriceTypescript = (num: number, symbol: string = "$") =>
    `${symbol}${num.toFixed(2)}`;

//formatPriceTypescript("1234"); // Now we have a compile time error.

/*
---- TypeScript is not JavaScript ----

Typescript is a language to itself. It attempts to hide the "bad parts" of Javascript and gives developers from traditional OO-languages a more familiar experience: They can work with constructs they know: namespaces, classes, interfaces, enums, access modifiers and types.

But these are often just compile-time constructs. They are transpiled to JavaScript constructs (i.e. IIFEs) or they are just removed (i.e. types). 

The code that is actually executed at runtime does therefore still expose quirks that come with JavaScript (i.e. dynamic binding of this and no type-checks). 

Ultimately this is a leaky abstraction and developers must understand the concepts of JavaScript to debug and truly understand their TypeScript code.
*/

/*
---- Be Aware of Untyped Boundaries ----

Typescript does not guarantee type-correctness at runtime. Type errors can still ocurr at untyped boundaries. For instance, when getting json from the network or from local storage or even when reading from the DOM.

BY DESIGN TypeScript does not type checks at runtime. If you need a type check at runtime, you will need to implement them.

*/
