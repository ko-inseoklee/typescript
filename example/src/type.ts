let var1: unknown = 3;
let var2: any = 3;
let var3: any = '3';

// console.log(var1.length); // error : Property 'length' does not exist on type 'unknown'.ts(2339)
console.log(var2); // undefined