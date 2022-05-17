/*
  함수선언문

  함수표현식
*/

decFunc1();

// 1. 함수 선언문
function decFunc1(): void{
    console.log(1);
}

// decFunc2(); //Error: Block-scoped variable 'decFunc2' used before its declaration.ts(2448) => let으로 선언된 함수표현식으로 Hoisting 적용 X

// 2. 함수 표현식
let decFunc2 = function(): void{
    console.log(3);
}

decFunc2();

// decFunc3();

/* 3. 함수 표현식을 var로 선언.

    *Error*
    TSError: ⨯ Unable to compile TypeScript:
    hoisting-function.ts:23:1 - error TS2454: Variable 'decFunc3' is used before being assigned.

    => 함수표현식으로 저장에는 문제가 없으나 hoisting을 할 수 없어 compile에서 에러 발생.

*/
var decFunc3 = function(): void{
    console.log(3);
}