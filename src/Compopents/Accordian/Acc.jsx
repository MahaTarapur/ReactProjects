import React, { useRef, useState } from 'react'
import accDetails from './Accdetail';

function Acc()
{

    let[key,getKey]=useState()

    let updateKey=(e)=>
    {
        console.log(e.target.id);
        getKey(e.target.id)
    }

    return (
        <div >
             {accDetails.map(({id,q,a})=>
             {
                return(
                    <div key={id}>
                        <h4>
                        <label htmlFor={id}>{q} &nbsp;&nbsp;
                        <button  id={id} onClick={updateKey}>{key?<i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}</button>
                        </label>
                        </h4>
                        <p>{key?a.slice(0,0):a}</p>
                    </div>
                )
             }
             )}
        </div>
    )
}

export default Acc