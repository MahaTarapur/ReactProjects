import React, { useState } from 'react'

const useHideShow = () => 
{
    let[isbool,setIsbool]=useState(false)

    let hideImage=()=>
    {
        setIsbool(true)
    }
    let showImage=()=>
    {
        setIsbool(false)
    }

    return {isbool,hideImage,showImage}
}

export default useHideShow