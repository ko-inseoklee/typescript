// /*
//     Example1: let
//     - 초기화 없이 선언 가능
//     - 수정 가능
//     - 재선언 불가
// */
// let fo:number; // 초기화 없이 선언 가능
// fo = 3; // 수정 가능.

// let fo:number; // Error: Cannot redeclare block-scoped variable 'fo'.ts(2451) -> 재선언 불가.
yourName = "good";
var yourName;

// if(true) {
//   var yourName = "happy"; // sad와 같은 스코프로 인식
// }

console.log(yourName); // happy