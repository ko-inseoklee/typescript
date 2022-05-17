let declareAnonyFunc = function(): void{
    console.log(1);
}

let declareArrowFunc = () => {
    console.log(2);
}

let declareIIFEFunc = ((x:number) => {
    console.log(x);
})(3); // Output: 3

(function(a:number, b:number){
    console.log(a+b);
})(1,5); // Output: 6


((a:number, b:number) => {
    console.log(a*b);
})(2,4);