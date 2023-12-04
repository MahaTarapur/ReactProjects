import React from 'react'
import Child from './Child'

function Parent()
{
    let name="John" 
    
    let getChildData = (cdata) => 
    {
        console.log(cdata);
    }
    return (
        <div>
            <h1>Parent</h1>
            {/* One way data binding from child to parent by using function as prop */}
            {/* Here pFunc is function as a prop */}
            {/* Taking child component and taking pFunc as function as a prop  and sending through parent */}
            {/* Passing sname as a prop and sending data from parent to child */}
            <Child sname={name} pFunc={getChildData}></Child>
        </div>
    )
}

export default  Parent