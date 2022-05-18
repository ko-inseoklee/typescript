import React, {useReducer, useContext, createContext, Dispatch} from 'react';
import { Statement } from 'typescript';

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

type Action = 
 | {type: 'SET_COUNT'; count: number}
 | {type: 'SET_TEXT'; text: string}
 | {type: 'SET_COLOR'; color: Color}
 | {type: 'TOGGLE_GOOD'};


 //Action을 보내기 위한 타입(Dispatch)
 type SampleDispatch = Dispatch<Action>;

 const SampleStateContext = createContext<State | null>(null);
 const SampleDispatchContext = createContext<SampleDispatch | null>(null);

 const reducer = (state: State, action: Action) : State => {
     switch(action.type){
         case 'SET_COUNT':
             return {
                 ...state,
                 count: action.count
             };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error('Unhandlded action');
     }
 }
/* 
 ? () 안의 파라미터를 object로 받아오기 때문에, obj{props} : obj{props:type} 형식으로 타입을 지정해준다.
export function SampleProvider({children}: {children: React.ReactNode}){
    
} 
*/

export const SampleProvider = ({children}:{children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true,
    });

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}

export function useSampleState(){
    const state = useContext(SampleStateContext);

    if(!state) throw new Error('Cannot find SampleProvider');
    return state;
}

export const useSampleDispatch = () => {
    const dispatch = useContext(SampleDispatchContext);

    if(!dispatch) throw new Error('Cannot find SampleProvider');
    return dispatch;
}