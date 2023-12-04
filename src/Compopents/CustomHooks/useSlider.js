import React, { useState } from 'react'

function useSlider(images)
{

    let [change,setChange]=useState(0)
    let updatePrev;
    let updateNext;

    updateNext=()=>
    {
        if(change>=(images.length-1))
        {
            change=-1
        }
        setChange(change+1)
    }
    updatePrev=()=>
    {
        if(change<=-(images.length-1))
        {
            change=1
        }
        setChange(change-1)
    } 

    return {images,change,updatePrev,updateNext}
}

export default useSlider