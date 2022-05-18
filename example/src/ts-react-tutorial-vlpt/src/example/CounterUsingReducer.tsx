import React, { useReducer, FC } from 'react';

// 앞의 type은 TS 내에서 type을 정의하는 문법, 뒤의 type은 property.
type Action = {type: 'INCREASE'} | {type: 'DECREASE'};  


//? Why Reducer? state를 관리하는 로직을 비즈니스로직에서 분리하여 관리하기 위해. 코드 가독성 up
const reducer = (state: number, action: Action) : number => {
    switch(action.type){
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

const CounterUsingReducer = function(){
    // dispatch는 Reducer를 사용할 함수명. Conventional Rule인듯?
    const [count, dispatch] = useReducer(reducer,0);
    
    const onIncrease = () => dispatch({type: "INCREASE"});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>count up</button>
                <button onClick={onDecrease}>count down</button>
            </div>
        </div>
    );
}

export default CounterUsingReducer;