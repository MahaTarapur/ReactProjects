import React, { useEffect, useState } from 'react'
import TextAsgnmt from './TextAsgnmt'
import Style from './css/TextAsgnmt.module.css'

const TextAsgnmntMain = () => {

    useEffect(()=>
    {

    })

    return (
        <div className={Style.divstyles}>
            <ol>
            <li><TextAsgnmt/></li>
            <li><TextAsgnmt/></li>
            <li><TextAsgnmt/></li>
            <li><TextAsgnmt/></li>
            <li><TextAsgnmt/></li>
            </ol>
        </div>
    )
}

export default TextAsgnmntMain