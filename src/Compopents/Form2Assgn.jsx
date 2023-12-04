import React, { useEffect } from 'react'
import { useState } from 'react'
import formstyle from './css/Form1Assgn.module.css'

function Form2Assgn()
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
        displayUsers()
        setTimeout(()=>
        {
            console.log("st");
            setClear()
        },1000)
    }

    let [newarray,setNewarray]=useState([])
    let displayUsers=()=>
    {
        setNewarray([...newarray,data])
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
                <button>Register</button>
            </form>    
            {newarray.map((users,index)=>
            {
                return(
                    <div className={formstyle.databox}>
                        <h3>Name:{` ${users.fn} ${users.ln}`}</h3>
                        <h3>Age:{` ${users.age}`}</h3>
                        <h3>Mobile No:{` ${users.mobile}`}</h3>
                        <h3>Gender:{` ${users.gender}`} </h3>
                        <h3>Email:{` ${users.email}`}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Form2Assgn