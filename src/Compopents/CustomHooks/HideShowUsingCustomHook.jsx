import React from 'react'
import useHideShow from './useHideShow'
import img1 from './Images/hideshowimg.jpeg'

const HideShowUsingCustomHook = () => 
{

   let {isbool,hideImage,showImage}=useHideShow()

    return (
        <div>
            {isbool || <img style={{marginLeft:"400px",borderRadius:"5px"}} height="300px" width="400px" src={img1}/>}
            <br></br>
            <button style={{marginLeft:"410px"}} onClick={hideImage} >Hide</button>
            <button style={{marginLeft:"290px"}} onClick={showImage} >Show</button>
        </div>
    )
}

export default HideShowUsingCustomHook