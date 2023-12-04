import React from 'react'
import useSlider from './useSlider'
import si from '../Slider/SliderImages.module.css'
import img1 from './Images/im1.jpeg'
import img2 from './Images/img2.png'
import img3 from './Images/img3.jpeg'

const SliderUsingCustomHook = () => 
{

    let {images,change,updatePrev,updateNext}=useSlider([img1,img2,img3])    
    
    return (
        <div className={si.div}>
            <img className={si.image} src={images.at(change)} alt="" />
            <div className={si.btndiv}>
            <button className={si.btn} onClick={updatePrev}>Previous</button>
            <button className={si.btn} onClick={updateNext}>Next</button>
            </div>
        </div>
    )
}

export default SliderUsingCustomHook