import React from 'react'
import { useEffect } from 'react';

const ChildOne = () => 
{
    console.log("Child Rendered");

    useEffect(()=>
    {
        console.log("Child useEffect");
    })
    return (
        <div>
            {console.log("Child JSX")}            
        </div>
    )
}

export default ChildOne