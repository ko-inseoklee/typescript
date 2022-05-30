/*
    !함수 선언문 기본 문법
*/
function sum(x: number, y: number): number {
    return x + y;
}
sum(1,2);


/*
    !Reduce 함수 구현.
*/
function sumArray(numbers: number[], initValue: number): number{
    return numbers.reduce((acc, current) => acc + current, initValue);
}

const total = sumArray([1,2,3,4,5],2);

console.log(total);


/*
    !인터페이스 구현
*/

interface Shape {
    getArea(): number; // Shape 인터페이스의 구현체는 number를 return하는 getArea() 함수를 포함해야 한다.
}

class Circle implements Shape {
/* 
    ? Version 1 - Scope 미지정.

    radius: number;

    constructor(radius: number){
        this.radius = radius;
    }

 */ 

    /* 
        ? Version 2 - Scope 지정.
    */
    
    constructor(public radius: number){
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

}

class Rectangle implements Shape {
    
    /*
    
    ? Version 1

    width: number;
    height: number;

    constructor(w: number, h: number){  //
        this.width = w;
        this.height = h;
    }
    */

    constructor(private width: number, private height: number){
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(5,2)];
shapes.forEach(shape => {
    console.log(shape.getArea());
})

/* 
    ! 인터페이스 상속
        주로 클래스와 관련된 타입에 사용한다.
*/

interface Person {
    name: string;
    age?: number; // ? 물음표는 설정을 해도 안해도 관계 없는 값을 의미함.
}

interface Developer extends Person {
    skills: string[];
}

const person : Person = {
    name: "이인석",
    age: 20,
};

/* 
    ! Type Alias 사용하기
        Literal 타입 설정.
        주로 일반 객체와 관련된 타입에 사용한다.
        Type이 Interface보다 가벼운 느낌?
*/

type Person2 = {
    name: string;
    age?: number;
}

type Developer2 = Person2 & {
    skills: string[];
}

const person2: Person2 = {
    name: "이인석"
}

const expert2: Developer2 = {
    name: "inseok lee",
    skills: ["C++", "Java"]
}

type People = Person2[];
const people:People = [person2, expert2];

type Color = 'red' | 'orange' | 'yellow'; // Color 타입에 들어올 수 있는 value는 red, orange, yellow 세 개 뿐이다.
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

console.log(color);


/* 
    ! Generics 
        함수, 클래스, 인터페이스, type alias를 사용할 때 여러 종류의 타입을 호환시키기 위해 사용하는 문법.
*/


// ? Generic 사용하지 않은 예제.
function merge(a: any, b: any): any{
    return{
        
        ...a,
        ...b 
       
       /*
        a,b 
        */
    };
}

const merged = merge({foo: 1},{bar: 1});

console.log(merged);

    // ? Generic 사용 예제.
function merge2<A,B>(a: A, b: B): B  {
    return {
        ...a,
        ...b
    };
} 

const merged2 = merge2({foo: 2},{bar: 2});
console.log(merged2);


// ? Generic + interface
interface Items<T>{
    list: T[];
};

const numberItems: Items<number> = {
    list: [1,2,3];
}

const stringItems: Items<string> = {
    list: ["How", "are", "you"];
}