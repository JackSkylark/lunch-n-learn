function logArguments<TArgs extends any[], TRet>(
    fn: (...args: TArgs) => TRet
)
{
    return(...args: TArgs) =>
    {
        for (let i = 0; i < args.length; i++)
        {
            console.log(`Argument[${i}] = ${args[i]}`);
        }

        return fn(...args);
    } 
}

function logDuration<TArgs extends any[], TRet>(
    fn: (...args: TArgs) => TRet
)
{
    const funcName = fn.name;

    return(...args: TArgs) =>
    {
        console.time(funcName);
        const results = fn(...args);
        console.timeEnd(funcName);
        return results;
    } 
}

function wrapper<TArgs extends any[], TRet>(
    fn: (...args: TArgs) => TRet
)
{
    return(...args: TArgs) =>
    {
        return fn(...args);
    } 
}

wrapper(logDuration((x) => x))

export function withLogger<TArgs extends any[], TRet>(
    fn: (...args: TArgs) => TRet
)
{
    return logArguments(logDuration(fn));
}
