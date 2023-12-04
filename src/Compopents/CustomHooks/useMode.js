import React, { useEffect, useState } from 'react'

const useMode = () => 
{

    let [mode,setMode]=useState("white")
    let [isbool,setIsbool]=useState(true)

    let updateMode=()=>
    {
        if(mode==="white")
        {
        setMode("black")
        }
        else
        {
        setMode("white")
        }
        setIsbool(!isbool)
    }

    useEffect(()=>
    {
        document.body.style.backgroundColor=mode
    },[mode])

   return {isbool,updateMode}
}

export default useMode