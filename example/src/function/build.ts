function b(path){
    return ({param}) => {
        return {
            pName: path? "inseok" : "insuk",
            sName: typeof(param) === typeof(1)? "king" : "queen",
        };
    };
};

function t(path: number) : number;
function t(path: string) : string;

function t(path : any) {
    return path;
}

function r({path}){
    return {
        path,
        build:b(path)
    };
}


let test1 = r({path: true});
let test2 = r({path: false});

console.log(b(123)({param: 1}));

Func2(123)({param:123})(123);


let test1Build = test1.build({});
let test2Build = test2.build({});
let test3Build = test1.build({param: 1});
let test4Build = test2.build({param: 1});
let test5Build = test1.build({param: "1"});
let test6Build = test2.build({param: "1"});

console.log(`test1 : ${test1Build.pName}`);
console.log(`test1 : ${test1Build.sName}`);

console.log(`test2 : ${test2Build.pName}`);
console.log(`test2 : ${test2Build.sName}`);

console.log(`test3 : ${test3Build.pName}`);
console.log(`test3 : ${test3Build.sName}`);

console.log(`test4 : ${test4Build.pName}`);
console.log(`test4 : ${test4Build.sName}`);

console.log(`test5 : ${test5Build.pName}`);
console.log(`test5 : ${test5Build.sName}`);

console.log(`test6 : ${test6Build.pName}`);
console.log(`test6 : ${test6Build.sName}`);
