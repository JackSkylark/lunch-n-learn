import * as readline from "readline";
import { createStore } from "redux";
import { countReducer } from "./reducer";
import * as actions from "./action";

readline.emitKeypressEvents(process.stdin);
if (process.stdin.setRawMode)
{
    process.stdin.setRawMode(true);
}

function main()
{
    const store = createStore(countReducer);

    function render()
    {
        const state = store.getState();
        renderCounter(state);
    }

    store.subscribe(render);

    process.stdin.on('keypress', (str: string, key: readline.Key) => {
        if (key.ctrl && key.name === 'c') {
            process.exit();
        } else {
            if (str === "+")
            {
                store.dispatch(actions.incrementCounter());
            }
            else if (str === "-")
            {
                store.dispatch(actions.decrementCounter());
            }
        }
    });

    render();
}

function renderCounter(counter: number)
{
    console.clear();
    console.log("------");
    console.log("Press + to increment the counter");
    console.log("Press - to decrement the counter");
    console.log("Press ctrl + c to exit the process");
    console.log("------");

    console.log(" ")
    console.log("counter value: " + counter)
}

main();
