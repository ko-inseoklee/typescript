//! Redux적용 => RootReducer에 counterReducer를 combine.

import { combineReducers } from "redux";
import counter, {CounterState} from "./counter";



const rootReducer = combineReducers({
    counter
});

/* 
! velopert에 나와있는 RootState를 export하는 구문.
! rootReducer에서 combine한 내부에 reducer들의 type이 모두 never로 작성되어 있기 때문에 외부에서 호출할 때 타입을 알 수 없어 아래와 같이 인터페이스로 combine할 reducer들의 타입을 명시하여 export 해줌. 

export type RootState = ReturnType<typeof rootReducer>;
*/
export interface rootState{
    rootReducer: ReturnType<typeof rootReducer>;
    counter: CounterState;
};
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
