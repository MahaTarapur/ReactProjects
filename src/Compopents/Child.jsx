import React from 'react'

function Child({sname,pFunc})
{
   
    let childData="Hello React"
        
    let childStyles=
    {
        width:"300px",
        height:"300px",
        border:"2px solid black",
        margin:"50px auto"
    }

    pFunc(childData)

    return (
        <div style={childStyles}>
            <h1>Child</h1>
            <h1>{sname}</h1>
        </div>
    )
}

   


export default Child