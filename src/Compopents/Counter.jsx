import React from 'react'
import { useState } from 'react'

const Counter = () => {

    let[count,setCount]=useState(0)

    let updateCounter=()=>
    {
        // state will not be updated bcz state cannot be updated directly
        // count++
        setCount(count+1)
    }

    let updateCounterToFive=()=>
    {
        setCount(5)
    }
    console.log("Rendered");

    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={updateCounter}>Update</button>
            <button onClick={updateCounterToFive}>UpdateToFive</button>
        </div>
    )
}

export default Counter