import React, { useReducer } from 'react'

function SwitchUseReducer()
{

    let [count,dispatcher]=useReducer((cstate,action)=>
    {
        switch(action)
        {
            case "increment":return cstate+1;
            case "decrement":return cstate-1;
            case "reset":return 0;
        }
        return cstate
    },0)

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>{dispatcher("increment")}}>Increment</button>
            <button onClick={()=>{dispatcher("decrement")}}>Decrement</button>
            <button onClick={()=>{dispatcher("reset")}}>Reset</button>
        </div>
    )
}

export default SwitchUseReducer

// !Or
// ~ declaring reducer function separately and passing its name in useReducer

// import React, { useReducer } from 'react'

// let countReducer=(cstate,action)=>
// {
//     switch(action)
//     {
//         case "increment":return cstate+1;
//         case "decrement":return cstate-1;
//         case "reset":return 0;
//     }
//     return cstate
// }

// function SwitchUseReducer()
// {

//     let [count,dispatcher]=useReducer(countReducer,0)

//     return (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={()=>{dispatcher("increment")}}>Increment</button>
//             <button onClick={()=>{dispatcher("decrement")}}>Decrement</button>
//             <button onClick={()=>{dispatcher("reset")}}>Reset</button>
//         </div>
//     )
// }

// export default SwitchUseReducer