import React, { useState } from 'react'
import Style from './customformvalidation.module.css'

function CustomFormValidation()
{

    let [formData,setFormData]=useState({fn:"",mob:"",email:"",pwd:""})
    let[error,setError]=useState({})

    // ! Updating state with endered data from ui
    let changeFormData=({target:{name,value}})=>
    {
        setFormData({...formData,[name]:value})
    }

    // !Submitting the formData
    let submitFormData=(e)=>
    {
        e.preventDefault();
        setError(validate(formData))
    }

    // !Validating the form data
    let validate=(fdata)=>
    {
        let errorMsg={}

        // !Fullname Validation
        if(!fdata.fn)
        {
            errorMsg.fnMsg="Fullname is Mandatory"
        }
        else if(fdata.fn.length<=6 && fdata.fn.length>=15)
        {
            errorMsg.fnMsg="Fullname must contain atleast 6 Characters and atmost 15 Characters"
        }
        else if(!/^[A-Z]/.test(fdata.fn))
        {
            errorMsg.fnMsg="Fullname must Start with uppercase"
        }
        else if(/[0-9]/.test(fdata.fn))
        {
            errorMsg.fnMsg="Fullname should only contain Alphabets"
        }


        // else if(!/^[A-Za-z]+$/.test(inputlname))

        // !Mobile Number Validation
        if(!fdata.mob)
        {
            errorMsg.mobMsg="Mobile Number is Mandatory"
        }
        else if(fdata.mob.length!==10)
        {
            errorMsg.mobMsg="Mobile Number Must be in 10 digits"
        }
        else if(!/[0-9]/.test(fdata.mob))
        {
            errorMsg.mobMsg="Mobile Number Should contain only numbers"
        }

        // !Email Validation
        if(!fdata.email)
        {
            errorMsg.emailMsg="Email is Mandatory"
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fdata.email))
        {
            errorMsg.emailMsg="Invalid Email"
        }

        // !Password Validation
        if(!fdata.pwd)
        {
            errorMsg.pwdMsg="Password is Mandatory"            
        }
        else if(!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(fdata.pwd))
        {
            errorMsg.pwdMsg="Password must be eight characters including one uppercase letter, one lowercase letter, and one number or special character."
        }
        
        return errorMsg
    }


    return (
        <div className={Style.div}>
            <form onSubmit={submitFormData}>
                <div className={Style.inputdiv}>
                    <input type="text" placeholder='Fullname' 
                    name='fn' value={formData.fn} 
                    onChange={changeFormData} />
                    <small>{error.fnMsg && error.fnMsg}</small>
                    </div>
                <div className={Style.inputdiv}>
                    <input type="tel" placeholder='Mobile Number' 
                    name='mob' value={formData.mob} 
                    onChange={changeFormData} />
                    <small>{error.mobMsg && error.mobMsg}</small>
                    </div>
                <div className={Style.inputdiv}>
                    <input type="text" placeholder='Email' 
                    name='email' value={formData.email} 
                    onChange={changeFormData} />
                    <small>{error.emailMsg && error.emailMsg}</small>
                    </div>
                <div className={Style.inputdiv}>
                    <input type="password" placeholder='Password' 
                    name='pwd' value={formData.pwd} 
                    onChange={changeFormData} />
                    <small>{error.pwdMsg && error.pwdMsg}</small>
                    </div>
                <div className={Style.buttondiv}>
                    <button type="submit">Register</button>
                    </div>
            </form>   
        </div>
    )
}

export default CustomFormValidation