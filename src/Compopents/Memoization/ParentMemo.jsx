import React, { useState } from 'react'
import ChildOneMemo from './ChildOneMemo'
import ChildTwoMemo from './ChildTwoMemo'

function ParentMemo()
{

    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)

    let updateCounter1=()=>
    {
        setCount1(count1+1)
    }
    let updateCounter2=()=>
    {
        setCount2(count2+1)
    }

    console.log("Parent Rendered");

    return (
        <div>
            <h1>Counter One: { count1}</h1>
            <button onClick={updateCounter1}>Update Counter 1</button>
            <h1>Counter Two: { count2}</h1>
            <button onClick={updateCounter2}>Update Counter 2</button>

            <ChildOneMemo count1={count1}/>
            <hr />
            <ChildTwoMemo count2={count2}/>
        </div>
    )
}

export default ParentMemo