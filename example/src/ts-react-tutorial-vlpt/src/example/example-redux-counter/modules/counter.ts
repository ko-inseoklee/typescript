const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({
    type: INCREASE
});


/* 
    ! 1.({}) 와 2.{} 의 차이는? 2번의 경우 type이 unused로 나옴.
    ==> return 구문 생략의 유무. 1번은 return 구문이 생략 가능하지만, 2번의 경우 return 구문을 생략할 수 없기 때문에 type: DECREASE 는 object로 return되지 않음.
    !. 틀린 구문
    export const decrease = () => {
        type: DECREASE
    };

    !. 변형된 맞는 구문.
    export const decrease = () => { 
        return {type: DECREASE};
    };
*/

export const decrease = () => ({
    type: DECREASE
});


export const increseBy = (diff: number) => ({
    type: INCREASE_BY,
    /* 
        액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다
        이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
        이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
        읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줍니다.
        다만, 무조건 꼭 따를 필요는 없습니다. 
    */
    payload: diff
});


/* 
    ? ReturnType<T>: 유틸리티 타입의 일종. Generic 함수의 타입을 return할 때 사용한다.
*/
type CounterAction = 
 | ReturnType<typeof increase>
 | ReturnType<typeof decrease>
 | ReturnType<typeof increseBy>;

export type CounterState = {
     count: number;
};

const initialState: CounterState = {
    count: 0
};

/* function counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch (action.type){
        case INCREASE:
            return {count: state.count + 1};
        case DECREASE:
            return {count: state.count - 1};
        case INCREASE_BY:
            //INCRESE_BY TYPE 안에 payload prop이 있기 때문에 action.type과 마찬가지로 action.payload를 사용할 수 있음. 다른 곳에서는 에러 뜸.
            return {count: state.count + action.payload};
        default:
            return state;
    }
} */

//파라미터가 오브젝트 타입이 아니므로, 지금과 같이 작성하는게 맞음.
//! 틀린 선언 const counter = ({state = initialState, action}:{state:CounterState, action: CounterAction})
const counter = (state: CounterState = initialState, action: CounterAction) : CounterState => {
    switch (action.type){
        case INCREASE:
            return {count: state.count + 1};
        case DECREASE:
            return {count: state.count - 1};
        case INCREASE_BY:
            //INCRESE_BY TYPE 안에 payload prop이 있기 때문에 action.type과 마찬가지로 action.payload를 사용할 수 있음. 다른 곳에서는 에러 뜸.
            return {count: state.count + action.payload};
        default:
            return state;
    }
}

export default counter;