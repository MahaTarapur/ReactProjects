import React, { useState } from 'react'

function StateWithArray(){

    let [array,setArray]=useState(["red","blue","green","yellow"])
    let [newArray,setNewArray]=useState([])

    function addElements()
    {
        setNewArray([...newArray,array.splice(0,1)])
    }
    
    return (
        <div>
            <h1 style={{margin:"10px"}}>{newArray.join(" ")}</h1>
            <button onClick={addElements} style={{width:"60px",height:"30px",fontSize:"20px",fontWeight:"bold",margin:"10px", marginLeft:"20px"}} >Add</button>            
        </div>
    )
}

export default StateWithArray