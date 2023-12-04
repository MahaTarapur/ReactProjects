import React from 'react'
import { useCounter } from './useCounter'

function CounterOne()
{

    let{count,incrementCounter,decrementCounter}=useCounter(2)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    )
}

export default CounterOne
