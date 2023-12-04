import React from 'react'
import { useState } from 'react'

function HideAndShow2() {
    let [isbool,setIsbool]=useState(true)

let toggleImage=()=>
{
    setIsbool(!isbool)
}
    
    return (
        <div>
             {isbool && <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg"/>}
            <br></br>
            <button  onClick={toggleImage}>{isbool?"Hide":"Show"}</button>   
        </div>
    )
}

export default HideAndShow2