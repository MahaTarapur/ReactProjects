import React from 'react'
import { useState } from 'react';

const SetStateIsAsynchronous = () => {

    let [count,setCount]=useState(0);

    let updateCounter=()=>
    {

        // ! State will update only once because we cannot 
        // ! directly use the state value after updating
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)


        // ! This will update but it will take so many lines of code
        // ! To reduce using function again and agian use for loop
        // setCount((previousState)=>
        // {
        //     return previousState+1
        // }
        // )
        // setCount((previousState)=>
        // {
        //     return previousState+1
        // }
        // )
        // setCount((previousState)=>
        // {
        //     return previousState+1
        // }
        // )
        // setCount((previousState)=>
        // {
        //     return previousState+1
        // }
        // )
        // setCount((previousState)=>
        // {
        //     return previousState+1
        // }
        // )

        // ! Using for loop for function and Updating the counter

        for(let i=0;i<5;i++)
        {
            setCount((previousState)=>
            {
                return previousState+1
            })
        }
    }
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={updateCounter}>+</button>
        </div>
    )
}

export default SetStateIsAsynchronous