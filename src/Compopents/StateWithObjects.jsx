import React from 'react'
import { useState } from 'react'

const StateWithObjects = () => {

    let[fullname,setFullName]=useState({firstName:"Maha",lastName:"Tarapur"});

    // ! This will only display firstname at first and when we click on last name only last name will display
    // ! it will not show lastname when we update first name because 
    // ! the firstname update function will be having the value of only firstname and hence last name will be undefined and same happens in last name update function
    // ! But we want to display both when we update only firstname and only lastname
    // ! use spread operatoor because it will stotre all the values and update the lastest one 
    // ! always place the spread operator first bcz the rest of the old values should be stored first and the updating values must come at last
    // let updateFirstName=()=>
    // {
    //     setFullName({firstName:"Ria"})
    // }
    // let updateLastName=()=>
    // {
    //     setFullName({lastName:"Roy"})
    // }

    // ^Using Spread Operator

    // ?*this will store the values as follows

    let updateFirstName=()=>
    {
        setFullName({...fullname,firstName:"Ria"})
    // ?* {firstName:"Maha",lastName:"Tarapur",firstName:"Ria"}
    }
    let updateLastName=()=>
    {
        setFullName({...fullname,lastName:"Roy"})
    // ?* {firstName:"Ria",lastName:"Tarapur",lastName:"Roy"}
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

export default StateWithObjects