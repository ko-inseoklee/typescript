import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit"; // createStore가 deprecate되어 configureStore사용. 예제 https://darrengwon.tistory.com/1406
import { createStoreHook } from "react-redux";
import rootReducer from "./modules";

// const store = createStore(rootReducer);


const store = configureStore({
    reducer: rootReducer
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);