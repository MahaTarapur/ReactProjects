import React, { useState } from 'react'

function HocCounter(OriginalComponent,c)
{
    function NewComponent()
    {
        let [count,setCount]=useState(0)

        let incrementCounter=()=>
        {
            setCount(count+c)
        }

        let decrementCounter=()=>
        {
            setCount(count-c)
        }

        return <OriginalComponent count={count} incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
            
    }

    return NewComponent
}

export default HocCounter
