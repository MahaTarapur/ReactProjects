import React, { useEffect, useState } from 'react'

const UseStopWatch = () => 
{
    let[sec,setSec]=useState(0)
    let[min,setMin]=useState(0)

    useEffect(()=>
    {
        setInterval(() => {
            setSec(sec+1)
        }, 1000); 
        setInterval(() => {
            setMin(min+1)
        }, 60000);        
    })

    return (
        <div>
            <h1 style={{textAlign:"center",backgroundColor:"purple"}}> {min} {sec}</h1>
        </div>
    )
}

export default UseStopWatch