/*
    Example2: const
        - 선언 시 초기화 필요.
        - 수정 불가.
        - 재선언 불가.
*/


/*
const foo:number; // Error: 'const' declarations must be initialized.ts(1155) -> 선언에 초기화를 하지 않아 발생.

const bar:number = 3;
bar = 5; // Error: Cannot assign to 'bar' because it is a constant.ts(2588) -> const를 수정하려 해서 발생한 오류.

const bar:number = 5; // Error: Cannot redeclare block-scoped variable 'bar'.ts(2451) -> 재선언 오류.
*/