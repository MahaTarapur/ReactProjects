import React from 'react'
import { useState } from 'react'

const HideAndShow = () => {

    let [isbool,setisbool]=useState(false)

    let hideImage=()=>
    {
        setisbool(true)
    }

    let showImage=()=>
    {
        setisbool(false)
    }

    let Styles=
    {
        width:"200px",
        height:"200px",
        border:"2px solid black",
        padding:"4px"
    }

    let buttonStyles=
    {
        width:"50px",
        height:"30px",
        margin:"20px"
    }

    return (
        <div margin={"20px auto"}>
            {isbool || <img style={Styles} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg"/>}
            <br></br>
            <button style={buttonStyles} onClick={hideImage}>Hide</button>
            <button style={buttonStyles} onClick={showImage}>Show</button>
        </div>
     )
}

export default HideAndShow