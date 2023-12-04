import React, { useState } from 'react'

function FormData()
{

    let [fn,setFn]=useState("")
    let [ln,setLn]=useState("")
    let [mobile,setMobile]=useState("")

    let updateFn=(e)=>
    {
        setFn(e.target.value)
    }

    let updateLn=({target})=>
    {
        setLn(target.value)
    }

    let updateMobile=({target:{value}})=>
    {
        setMobile(value)
    }


    return (
        <div>
            <h1></h1> 
            <form action="">
                <input type="text" placeholder='text' onChange={updateFn} />
                <br />
                <input type="text" placeholder='text' onChange={updateLn} />
                <br />
                <input type="tel" placeholder='number' onChange={updateMobile} />
                <br />
                <button>Register</button>
                </form>           
        </div>
    )
}

export default FormData