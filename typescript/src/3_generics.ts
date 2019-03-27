function identity<T = {}>(x: T)
{
    return x;
}

const identityArrowFunc = <T = {}>(x: T) => x;

type MathematicalOperator = (x: number) => (y: number) => number;
const addition: MathematicalOperator = (x: number) => (y: number) => x + y;
const subtraction: MathematicalOperator= (x: number) => (y: number) => x - y;

const executeFunc = <T extends any[], R>(fn: (...args: T) => R, ...args: T): R => fn(...args);

const callback1 = () => {};
const callback2 = (param1: string) => {};

executeFunc(callback1);
executeFunc(callback2, "");
