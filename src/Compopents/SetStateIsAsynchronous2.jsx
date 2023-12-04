import React from 'react'
import { useState } from 'react'

const SetStateIsAsynchronous2 = () => {

    let [count,setCount]=useState(0)

    let updateCounter=()=>
    {

        // !Set state is asynchronous bcz it will not make other statements to wait hence the values will be not updated immediately in the console
        console.log("Start");
        setCount((ps)=>
        {
            console.log("SetState");
            return ps+1
        })
        console.log("End");
    }
    return (
        <div>
             <h1>Count:{count}</h1>
            <button onClick={updateCounter}>+</button>
        </div>
    )
}

export default SetStateIsAsynchronous2