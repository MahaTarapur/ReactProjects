import React, { useEffect, useState } from 'react'

function UseEffectHook()
{
    let[count1,setCount1]=useState(0)
    let[count2,setCount2]=useState(0)

    let updateCounter1=()=>
    {
        setCount1(count1+1)
    }

    let updateCounter2=()=>
    {
        setCount2(count2+1)
    }

    useEffect(()=>
    {
        document.body.style.backgroundColor="green"
        console.log("UseEffect");
        return()=>
        {
            document.body.style.backgroundColor="red"            
            console.log("CleanUp Function");
        }
    },[count1])

    console.log("Rendered");
    return (
        <div>
            <h1>Counter 1:{count1}</h1>
            <h1>Counter 2:{count2}</h1>
            <button onClick={updateCounter1}>Update Counter1</button>
            <button onClick={updateCounter2}>Update Counter2</button>
        </div>
    )
}

export default UseEffectHook