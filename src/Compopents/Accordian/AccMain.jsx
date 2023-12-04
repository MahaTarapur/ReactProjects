import React from 'react'
import Acc from './Acc'
import accDetails from './Accdetail'

function AccMain() 
{
    return (
        <div >
            {accDetails.map(({id,q,a})=>
            {
                return <Acc key={id} q={q} a={a}/>
            })}            
        </div>
    )
}

export default AccMain