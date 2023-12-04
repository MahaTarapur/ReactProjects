import React, { useEffect } from 'react'
import ChildOne from './ChildOne';

const Parent = () => 
{
    console.log("Parent Rendered");

    useEffect(()=>
    {
        console.log("Parent UseEffect 1");
    })

    useEffect(()=>
    {
        console.log("Parent UseEffect 2");
    })

    return (
        <div>
            {console.log("Parent JSX")}            
            <ChildOne/>
        </div>
    )
}

export default Parent