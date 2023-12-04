import React, { useReducer } from 'react'

let initialState=
    {
        count1:0,
        count2:0
    }

    let countReducer=(cstate,action)=>
    {
        console.log(cstate);
        switch(action)
        {
            case "increment1":return{...cstate,count1:cstate.count1+1}
            case "decrement1":return{...cstate,count1:cstate.count1-1}

            case "increment2":return{...cstate,count2:cstate.count2+2}
            case "decrement2":return{...cstate,count2:cstate.count2-2}

            case 'reset':return initialState
        }
        return cstate
    }

function ObjectUseReducer() 
{

    let [state,dispatcher]=useReducer(countReducer,initialState)

    return (
        <div>
            <h1>Count:{state.count1}</h1>
            <button onClick={()=>{dispatcher("increment1")}}>Increment</button>
            <button onClick={()=>{dispatcher("decrement1")}}>Decrement</button>

            <hr />

            <h1>Count:{state.count2}</h1>
            <button onClick={()=>{dispatcher("increment2")}}>Increment</button>
            <button onClick={()=>{dispatcher("decrement2")}}>Decrement</button>

            <hr />

            <button onClick={()=>{dispatcher("reset")}}>Reset</button>
        </div>
    )
}

export default ObjectUseReducer