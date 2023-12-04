import React, { useState } from 'react'

function FormData2()
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

    let sendData=(event)=>
    {
        event.preventDefault();
        let fData={fn,ln,mobile}
        console.log(fData);
    }


    return (
        <div>
            <h1></h1> 
            <form action="" onSubmit={sendData}>
                <input type="text" placeholder="FirstName" name="fn" onChange={updateFn} />
                <br />
                <input type="text" placeholder="LastName" name="ln" onChange={updateLn} />
                <br />
                <input type="tel" placeholder="MobileNumber" name="mobile" onChange={updateMobile} />
                <br />
                <button>Register</button>
                </form>           
        </div>
    )
}

export default FormData2