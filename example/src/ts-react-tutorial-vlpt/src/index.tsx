import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import rootReducer from './example/example-redux-counter/modules';
import CounterApp from './example/example-redux-counter/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

/* const store = configureStore({
  reducer: rootReducer
}); */
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <CounterApp/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
