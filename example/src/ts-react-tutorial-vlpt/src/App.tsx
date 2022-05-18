import React from 'react';
import Greetings from './example/Greetings';
import Counter from './example/Counter';
import MyForm from './example/MyForm';
import CounterUsingReducer from './example/CounterUsingReducer';
import ReducerSample from './example/example-context/ReducerSample';
import { SampleProvider } from './example/example-context/SamleContext';
import CounterApp from './example/example-redux-counter/App' ;

const App:React.FC = () => {
/* 
  //! Counter 예제
  let greeter:string = "inseok";
  const handleClick = () => {
    greeter = "new inseok";
    console.log(greeter);
  };
  return <Greetings name={greeter} mark='!!' onClick={handleClick}/>;
*/

  // return <Counter/>

/*
  ! Counter Without Reducer
   const onSubmit = (form: {name: string, description: string}) => {
    console.log(form);
  }

  return <MyForm onSubmit={onSubmit}/>; 
*/


/*
 ! Counter Using Reducer 
return <CounterUsingReducer/>;

 */

/* 
 ! Reducer with ContextAPI
return (
  <SampleProvider> 
    <ReducerSample/>
  </SampleProvider>
  );
 */

  return <CounterApp/>
}
export default App;
