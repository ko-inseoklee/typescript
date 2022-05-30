export declare type Param = null | string | number;

export declare function b<Param = null>(path:boolean): ({param}:{param?: Param | undefined})
=> {
    pName: string
};

export declare function r({path}:{
    path: boolean
}) : {
    path: boolean,
    build: ({param}:{
        param?: Param | undefined,
    }) => {
        pName: string
    }
};