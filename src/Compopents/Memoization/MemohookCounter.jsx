import React, { useMemo, useState } from 'react'

function MemohookCounter() 
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

    // ! here we are passing the function in jsx,so it will execute for both change in states
    // ! it will check for both counter1 and counter2 even though we are adding only count1
    // ! this will make app slow
    // let iseven=()=>
    // {
    //     console.log("iseven called");
    //     for(let i=0;i<=3000000000;i++)
    //     {
    //     }
    //     return count1%2===0
    // }
    // console.log(iseven());

    // ! we are using useMemo hook,in this we are passing call back function 
    // ! the callback function will be executed only when there is change in dependency array
    // ! in dependency array we should pass the state variable which we want to execute when the state changes 
        let iseven=useMemo(()=>
        {
            console.log("iseven called");
            for(let i=0;i<=3000000000;i++)
            {

            }
            return count1%2===0
        },[count1])

    return (
        <div>
            <h1>Counter One: { count1}   {iseven?"Even":"Odd"} </h1>
            <button onClick={updateCounter1}>Update Counter1</button>
    
            <h1>Counter Two: { count2}</h1>
            <button onClick={updateCounter2}>Update Counter2</button>

        </div>
    )
}

export default MemohookCounter
