import React from 'react'
import { useState } from 'react'

const StateWithObjects2 = () => {

    let[fullname,setFullName]=useState({firstName:"Maha",lastName:"Tarapur"});

    let updateFirstName=()=>
    {
        fullname.firstName="Pari"
        setFullName({...fullname})
    }

    let updateLastName=()=>
    {
        fullname.lastName="Rocks"
        setFullName({...fullname})
    }

    return (
        <div>
            <h1>{JSON.stringify(fullname)}</h1>
            <p>{fullname.firstName} {fullname.lastName}</p>
            <button onClick={updateFirstName}>FirstName</button>
            <button onClick={updateLastName}>LastName</button>
        </div>
    )
}

export default StateWithObjects2