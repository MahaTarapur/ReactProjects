import React, { useReducer } from 'react'


let val;
let initialState=
{
    task:"",
    tasks:[],
    displaymsg:""
}

let getTask=({target:{value}})=>
    {
        val=value
        return value
    }
console.log(initialState);

let TodoReducer=(cstate,action)=>
{
    switch(action)
    {
        case "Add":return{...cstate,tasks:cstate.task}

    }
}
console.log(initialState);


function Todo ()
{
    let [state,dispatcher]=useReducer(TodoReducer,initialState)

    return (
        <div>
          <input type="text" onChange={getTask} placeholder='Task'/>  
          <button onClick={()=>{dispatcher("Add")}}>Add</button>
          
        </div>
    )
}

export default Todo