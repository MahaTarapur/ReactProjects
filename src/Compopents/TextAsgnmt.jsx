import React, { useEffect } from 'react'
import { useState } from 'react'
import style from './css/TextAsgnmt.module.css'

let s=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat cum aperiam, autem ducimus nobis ullam recusandae debitis consequatur fugiat magni dolorum ratione sequi fugit repellendus sed, beatae voluptate quia.
Enim, distinctio molestiasam nihil placeat est animi commodi in consectetur necessitatibus velit totam provident, amet doloremque ullam enim odio debitis ex!`

function TextAsgnmt()
{
    let [isbool,setIsbool]=useState(true)

    let toggleText=()=>
    {
        
        setTimeout(()=>
        {
        setIsbool(!isbool)
        },2000)
    }

    let assgn=useEffect(()=>
    {
        setIsbool(true)
    })
   
    return (
        <div className={style.card}>
            <h4>
            <label className={style.label}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, obcaecati? &nbsp;&nbsp;
            <button  className={style.button} onClick={toggleText}>{isbool?<i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}</button>
            </label>
            </h4>
            <p className={style.p}>{isbool?s.slice(0,0):s}</p>
        </div>
    )
}

export default TextAsgnmt