import { withLogger } from "./loggers";


function identity<T = {}>(x: T)
{
    return x;
}

function stringIdentity (x: string)
{
    return x;
}

const identityWithLogger = withLogger(identity);
identityWithLogger("1");

const addition = (x: number) => (y: number) => x + y;
const subtraction = (x: number) => (y: number) => x - y;
