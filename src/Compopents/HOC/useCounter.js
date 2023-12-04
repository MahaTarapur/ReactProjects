import { useState } from "react";

function useCounter(c)
{
    let[count,setCount]=useState(0)

    let incrementCounter=()=>
    {
        setCount(count+c)
    }

    let decrementCounter=()=>
    {
        setCount(count-c)
    }

    return {count,incrementCounter,decrementCounter}
}

export {useCounter}