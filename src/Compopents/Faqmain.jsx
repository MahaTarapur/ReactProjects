import React from 'react'
import faqdetails from './Faqdetails'
import Faq from './Faq'
import Style from './css/Faqmaim.module.css'

function Faqmain() 
{
    return (
        <div className={Style.divstyles}>
            {faqdetails.map(({id,q,a})=>
            {
                return <Faq key={id} q={q} a={a}/>
            })}            
        </div>
    )
}

export default Faqmain