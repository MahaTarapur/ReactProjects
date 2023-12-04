import React from 'react'
import useFormHook from './useFormHook'

const UsingCustomFormHook = () => 
{

    let {submitFormData,changeFormData,formData,error,maindivstyl,formstyl,inputsty,smallsty,btnsty}=useFormHook()


    return (
        <div className={maindivstyl}>
            <form className={formstyl} onSubmit={submitFormData}>
                <div>
                    <input className={inputsty} type="text" placeholder='Fullname' 
                    name='fn' value={formData.fn} 
                    onChange={changeFormData} />
                    <div className={smallsty}>
                    <small>{error.fnMsg && error.fnMsg}</small>
                    </div>
                    </div>
                <div>
                    <input className={inputsty} type="tel" placeholder='Mobile Number' 
                    name='mob' value={formData.mob} 
                    onChange={changeFormData} />
                    <div className={smallsty}>
                    <small>{error.mobMsg && error.mobMsg}</small>
                    </div>
                    </div>
                <div>
                    <input className={inputsty} type="text" placeholder='Email' 
                    name='email' value={formData.email} 
                    onChange={changeFormData} />
                    <div  className={smallsty} >
                    <small>{error.emailMsg && error.emailMsg}</small>
                    </div>
                    </div>
                <div>
                    <input className={inputsty} type="password" placeholder='Password' 
                    name='pwd' value={formData.pwd} 
                    onChange={changeFormData} />
                    <div className={smallsty} >
                    <small>{error.pwdMsg && error.pwdMsg}</small>
                    </div>
                    </div>
                <div className={btnsty}>
                    <button type="submit">Register</button>
                    </div>
            </form>   
        </div>
    )
}

export default UsingCustomFormHook