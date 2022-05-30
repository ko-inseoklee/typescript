import React, {useState} from 'react';

export default function Counter(){
    const [count, setCount] = useState<number>(0); //? Generic 사용, Generic은 state를 관리할 변수가 null일 수도 있을 때 사용. <T | null> 과 같은 형태로.
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>Increase Count</button>
                <button onClick={onDecrease}>Decrease Count</button>
            </div>
        </div>
    )
}