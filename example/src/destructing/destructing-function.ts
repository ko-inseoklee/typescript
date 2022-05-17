function destructFunc(): {name:string, age: number}{
    let obj = {
        name: "inseok lee",
        age: 27
    };

    return obj;
}

let {name: r1, age: r2} = destructFunc();

console.log(r1);    // Output: inseok lee === destructFunc의 obj.name;
console.log(r2);    // Output: 27 === destructFunc의 obj.age;