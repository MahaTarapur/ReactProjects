import React, { useEffect, useState } from 'react'
import img7 from '../Images/i7.jpeg'
import img8 from '../Images/i8.jpeg'
import img9 from '../Images/i9.webp'
import img10 from '../Images/i10.jpeg'
import autoslide from './AutomaticSlider.module.css'


function AutomaticSlider()
{

    let images=[img7,img8,img9,img10]
    let [count,setCount]=useState(0)

    let [slide,setSlide]=useState(img7)

    setTimeout(()=>
    {
        setCount(count+1)
    },10000)

    useEffect(()=>
    {
        setTimeout(() => 
    {
       setSlide(img7)         
    }, 2000); 
    setTimeout(() => 
    {
       setSlide(img8)         
    }, 4000); 
    setTimeout(() => 
    {
       setSlide(img9)         
    }, 6000); 
    setTimeout(() => 
    {
       setSlide(img10)         
    }, 8000); 
    },[count])
       

    return (
        <div className={autoslide.div}>
            <img src={slide} alt="" />
        </div>
    )
}

export default AutomaticSlider