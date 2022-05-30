export declare function build<Param = null, Query = null, Hash extends string | undefined = undefined, State = null>(path: string): ({ param, query, hash, state }: {
    param?: Param | undefined;
    query?: Query | undefined;
    hash?: Hash | undefined;
    state?: State | undefined;
}) => {
    pathname: string;
    search: string;
    hash: string | Hash;
    state: State | null;
};

// const foo = arg1 => arg2 => arg1+arg2;

