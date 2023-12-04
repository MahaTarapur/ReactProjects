import React, { useState } from 'react'

function ControlledComponent()
{

    let[loginForm,setLoginForm]=useState({username:"",password:""})
    let changeLoginForm=({target:{value,name}})=>
    {
        setLoginForm({...loginForm,[name]:value})
    }
    let getFormData=(e)=>
    {
        e.preventDefault();
        console.log(loginForm);
    }
    console.log("Controlled Rendered");

    return (
        <div>
            <h1>Controlled Component</h1>
            <form onSubmit={getFormData}>
                <input type="text" name='username' onChange={changeLoginForm} />
                <input type="password" name='password' onChange={changeLoginForm} />
                <button type='submit'>Login</button>
            </form>
            
        </div>
    )
}

export default ControlledComponent