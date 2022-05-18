import React from "react";
import { useSampleState, useSampleDispatch } from "./SamleContext";

const ReducerSample = () => {
    const state = useSampleState();
    const dispatch = useSampleDispatch();
    
    const setCount = () => dispatch({type:"SET_COUNT", count: 5});
    const setText = () => dispatch({type:"SET_TEXT", text: "Bye"});
    const setColor = () => dispatch({type:"SET_COLOR", color : "orange"});
    const toggleGood = () => dispatch({type: "TOGGLE_GOOD"});

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>set_count</button>
                <button onClick={setText}>set_text</button>
                <button onClick={setColor}>set_color</button>
                <button onClick={toggleGood}>toggle_good</button>
            </div>
        </div>
    );
}

export default ReducerSample;