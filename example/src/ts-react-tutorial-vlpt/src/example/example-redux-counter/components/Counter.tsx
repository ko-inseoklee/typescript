import React from "react";

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
}: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>count up</button>
            <button onClick={onDecrease}>count down</button>
            <button onClick={() => onIncreaseBy(5)}>count interval 5</button>
        </div>
    );
}

export default Counter;