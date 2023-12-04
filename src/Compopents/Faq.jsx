import React, { useState } from 'react'
import style from './css/Faqmaim.module.css'

function Faq({id,q,a})
{

    let[isbool,setIsbool]=useState(true)

    let toggle=()=>
    {
        if(!isbool)
        {
            setIsbool(true)
        }
        else
        {
            setIsbool(false)
        }
    }

    return (
        <div className={style.card}>
            <h4>
            <label className={style.label} htmlFor={id}>{q} &nbsp;&nbsp;
            <button className={style.button} id={id} onClick={toggle}>{isbool?<i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}</button>
            </label>
            </h4>
            <p id className={style.p}>{isbool?a.slice(0,0):a}</p>
        </div>
    )
}

export default Faq