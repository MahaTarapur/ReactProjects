import React from 'react'
import { useCounter } from './useCounter'

function CounterTwo()
{

    let{count,incrementCounter,decrementCounter}=useCounter(5)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}

export default CounterTwo
