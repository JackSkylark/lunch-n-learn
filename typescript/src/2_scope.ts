// Variable Scope
// var vs let vs const

/**
 * var "i" is hoisted to function scope.
 * This means that "i" will mutate before the first
 * callback function is even executed.
 */
function varFunc()
{
    for (var i = 0; i < 10; i++) {
        function callback()
        {
            console.log(i);
        }

        setTimeout(callback, 100 * i);
    }
}

/**
 * "i" is hoisted to block scope and a new variable 
 * will be created for each iteration of the for loop
 */
function letFunc()
{
    for (let i = 0; i < 10; i++) {
        function callback()
        {
            console.log(i);
        }

        setTimeout(callback, 100 * i);
    }
}
