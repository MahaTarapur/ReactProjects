import React, { useState } from 'react'
import FormData from'./css/Formdata.module.css'

function FormData3()
{

    let [data,setData]=useState({fn:"",ln:"",mobile:""})

    let updateData=({target:{name,value}})=>
    {
        setData({...data,[name]:value})
    }

    let sendData=(event)=>
    {
        event.preventDefault()
        console.log(data);
        displayData()
    }

    let[isbool,setisbool]=useState(false)

    let displayData=()=>
    {
        setisbool(true)
    }


    return (
        <div className={FormData.box}>
            {isbool && <h3>Fullname:{` ${data.fn} ${data.ln}`} <br /> MobileNumber:{` ${data.mobile}`}</h3> }
            <form className={FormData.form} action="" onSubmit={sendData}>
                <input type="text" placeholder="FirstName" name="fn" onChange={updateData} />
                <input type="text" placeholder="LastName" name="ln" onChange={updateData} />
                <input type="tel" placeholder="MobileNumber" name="mobile" onChange={updateData} />
                <button>Register</button>
                </form>           
        </div>
    )
}

export default FormData3