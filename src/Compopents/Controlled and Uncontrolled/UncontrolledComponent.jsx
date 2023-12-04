import React, { useRef } from 'react'

function UncontrolledComponent() 
{
    let usernameRef=useRef()
    let passwordRef=useRef()

    let getFormData=(e)=>
    {
        e.preventDefault()
        let u=usernameRef.current.value
        let p=passwordRef.current.value
        console.log({p,u});
    }
    console.log("Uncontrolled Rendered");

    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={getFormData}>
                <input type="text" name='username' ref={usernameRef} />
                <input type="password" name='password' ref={passwordRef} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent
