import React, { useCallback, useState } from 'react'
import UseCallBackChildOne from './UseCallBackChildOne'
import UseCallBackChildTwo from './UseCallBackChildTwo'

function UseCallBack()
{

    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)

    let updateCounter1=useCallback(()=>
    {
        setCount1(count1+1)
    },[count1])
    let updateCounter2=useCallback(()=>
    {
        setCount2(count2+1)
    },[count2])

    // let updateCounter1=()=>
    // {
    //     setCount1(count1+1)
    // }
    // let updateCounter2=()=>
    // {
    //     setCount2(count2+1)
    // }

    console.log("Parent Rendered");
    return (
        <div>
            <h1>Counter One: { count1}</h1>
            <button onClick={updateCounter1}>Update Counter1</button>
    
            <h1>Counter Two: { count2}</h1>
            <button onClick={updateCounter2}>Update Counter2</button>

            <UseCallBackChildOne count1={count1} updateCounter1={updateCounter1}/>
            <UseCallBackChildTwo count2={count2} updateCounter2={updateCounter2}/>
        </div>
    )
}

export default UseCallBack