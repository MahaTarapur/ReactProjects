import React, { useEffect } from 'react'
import { useState } from 'react'
import formstyle from './css/Form1Assgn.module.css'

function Form1Assgn()
{
    let [data,setData]=useState({fn:"",ln:"",age:"",mobile:"",gender:"",email:"",password:""})
    let [clear,setClear]=useState()

    let updateData=({target:{name,value}})=>
    {
        setData({...data,[name]:value})
    }  

    let sendData=(event)=>
    {
        event.preventDefault()
        console.log(data);
        setClear("")
    }

    let [display,setDisplay]=useState({})
    
    let displaydata=({target:{name,value}})=>
    {
    setDisplay({...data,[name]:value})
    }

    let [isbool,setIsbool]=useState(false)

    let displayhide=()=>
    {
        setIsbool(true)
    }
   
    return (
        <div className={formstyle.maindiv}>
            <form className={formstyle.form} action="" onSubmit={sendData}>
                <input required type="text" placeholder="FirstName" name="fn" value={clear} onChange={updateData} />
                <input required type="text" placeholder="LastName" name="ln" value={clear} onChange={updateData} />
                <input required type="number" placeholder="Age" name="age" value={clear} onChange={updateData} />
                <input required type="tel" placeholder="MobileNumber" name="mobile" value={clear} onChange={updateData} />
                <input required type="text" placeholder="Gender" name="gender" value={clear} onChange={updateData} />
                <input required type="email" placeholder="Email" name="email" value={clear} onChange={updateData} />
                <input required type="password" placeholder="Password" name="password" value={clear} onChange={updateData} />
                <button onClick={displaydata} onMouseUp={displayhide}>Register</button>
            </form>    
            {isbool && <div className={formstyle.databox}>
                <h3>Name:{` ${display.fn} ${display.ln}`}</h3>
                <h3>Age:{` ${display.age}`}</h3>
                <h3>Mobile No:{` ${display.mobile}`}</h3>
                <h3>Gender:{` ${display.gender}`} </h3>
                <h3>Email:{` ${display.email}`}</h3>
            </div>}
        </div>
    )
}

export default Form1Assgn