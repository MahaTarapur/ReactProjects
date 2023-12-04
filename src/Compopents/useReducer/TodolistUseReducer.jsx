import React, { useReducer, useState } from "react"
import sty from './TodolistUseReducer.module.css'

let inital = [];

let reducerftn = (current, action) => {
  switch (action.type) 
  {
    case "senddata":return [...current, action.payload];
    case "delete":return current.filter((ele, ind) => 
    {
      return ind !== action.payload;
    });
    default:return current;
  }
}

const TodolistUseReducer = () => 
{
  const [target, settarget] = useState("")

  let fliterddata = ({ target: { value } }) => 
  {
    settarget(value);
  }

  let [state, dispatch] = useReducer(reducerftn, inital)
  return (
    <div className={sty.main}>
      <div className={sty.top}>
      <input type="text" placeholder="Add Task" onChange={fliterddata}/>
      <button onClick={() => 
                          {
                          dispatch({ type: "senddata", payload: target });
                          }}>Add</button>
    </div>
    <div className={sty.down}>
      {state.map((element, ind) => 
        {
          return (
            <div>
            <h3>{element}</h3>
            {element && (<button
                    onClick={() => {dispatch({ type: "delete", payload: ind })}}>
                    Delete</button>)}
            </div>)
        })}
    </div>
    </div>
    )
}

export default TodolistUseReducer