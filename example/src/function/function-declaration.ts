let declareAnonyFunc = function(): void{
    console.log(1);
}


let declareIIFEFunc = ((x:number) => {
    console.log(x);
    
    return x;
})(3); // Output: 3

let declareArrowFunc = () => {
    console.log(2);
}
console.log(typeof(declareIIFEFunc));
console.log(typeof(declareAnonyFunc));

/*
(function(a:number, b:number){
    console.log(a+b);
})(1,5); // Output: 6


((a:number, b:number) => {
    console.log(a*b);
})(2,4);
*/
// let myarr = [1,2,3,4];

// function test(data) : number{
//     let result: number = 0;
//     data.map(d => {
//         result += d;
//     })

//     console.log(`test1 = ${result}`);
//     return result;
// }

// function test2(...data) : number{
//     let result: number = 0;
//     data.map(d => {
//         result += d;
//     })

    
//     console.log(`test2 = ${result}`);
//     return result;
// }

// test(myarr);
// test2(myarr);