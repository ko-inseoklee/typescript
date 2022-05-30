import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Counter from "./example/Counter";
import CounterUsingReducer from "./example/CounterUsingReducer";
import { SampleProvider } from "./example/example-context/SamleContext";
import ReducerSample from "./example/example-context/ReducerSample";

const MyRoutes = () => {
    return (
        <div>
            <Routes >
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/counter-using-reducer" element={<CounterUsingReducer/>}/>
                <Route path="/counter-using-context" element={
                    <SampleProvider>
                        <ReducerSample/>
                    </SampleProvider>
                } />
            </Routes>
            <ul>
                <li>
                    <Link to="/counter">카운터</Link>
                </li>
                <li>
                    <Link to="/counter-using-reducer">리듀서를 이용한 카운터</Link>
                </li>
                <li>
                    <Link to="/counter-using-context">Context API 이용 리듀서</Link>
                </li>
            </ul>
        </div>
    );
}

export default MyRoutes;