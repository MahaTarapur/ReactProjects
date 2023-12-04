import React, { useState } from 'react'
import img1 from '../Images/i1.webp'
import img2 from '../Images/i2.jpeg'
import img3 from '../Images/i3.webp'
import img4 from '../Images/i4.webp'
import img5 from '../Images/i5.jpeg'
import img6 from '../Images/i6.jpeg'
import img7 from '../Images/i7.jpeg'
import img8 from '../Images/i8.jpeg'
import img9 from '../Images/i9.webp'
import img10 from '../Images/i10.jpeg'
import si from './SliderImages.module.css'


function SliderImages()
{
    let images=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
    let [change,setChange]=useState(0)
    let updatePrev
    let updateNext

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
   
    return(
        <div className={si.div}>
            <img className={si.image} src={images.at(change)} alt="" />
            <div className={si.btndiv}>
            <button className={si.btn} onClick={updatePrev}>Previous</button>
            <button className={si.btn} onClick={updateNext}>Next</button>
            </div>
        </div>
    )
}

export default SliderImages