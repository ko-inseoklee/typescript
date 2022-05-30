"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
    !함수 선언문 기본 문법
*/
function sum(x, y) {
    return x + y;
}
sum(1, 2);
/*
    !Reduce 함수 구현.
*/
function sumArray(numbers, initValue) {
    return numbers.reduce(function (acc, current) { return acc + current; }, initValue);
}
var total = sumArray([1, 2, 3, 4, 5], 2);
console.log(total);
var Circle = /** @class */ (function () {
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
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    /*
    
    ? Version 1

    width: number;
    height: number;

    constructor(w: number, h: number){  //
        this.width = w;
        this.height = h;
    }
    */
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(5, 2)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: "이인석",
    age: 20,
};
var person2 = {
    name: "이인석"
};
var expert2 = {
    name: "inseok lee",
    skills: ["C++", "Java"]
};
var people = [person2, expert2];
var color = 'red';
var colors = ['red', 'orange'];
console.log(color);
/*
    ! Generics
        함수, 클래스, 인터페이스, type alias를 사용할 때 여러 종류의 타입을 호환시키기 위해 사용하는 문법.
*/
// ? Generic 사용하지 않은 예제.
function merge(a, b) {
    return __assign(__assign({}, a), b
    /*
     a,b
     */
    );
}
var merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
// ? Generic 사용 예제.
function merge2(a, b) {
    return __assign(__assign({}, a), b);
}
var merged2 = merge2({ foo: 1 }, { bar: 1 });
console.log(merged2);
