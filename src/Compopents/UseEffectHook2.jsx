import React, { useEffect, useState } from 'react'

const UseEffectHook2 = () => 
{

    let[count,setCount]=useState(0)
    let[count1,setCount1]=useState(0)

    useEffect(()=>
    {
        console.log("UseEffect");
        let interval=setInterval(()=>
        {
            updateCounter()
        },1000)

        // !Cleanup code
        return ()=>
        { 
            clearInterval(interval)
        }
    })

    let updateCounter=()=>
    {
        setCount(count+1)
        console.log("Counter Updated");
    }
    let updateCounter1=()=>
    {
        setCount1(count1+3)
        console.log("Counter1 Updated");
    }

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={updateCounter}>Update</button>
            <hr />
            <h1>Count1:{count1}</h1>
            <button onClick={updateCounter1}>Update</button>
        </div>
    )
}

export default UseEffectHook2