import React from 'react'
import useMode from './useMode'
import msty from './Darkm.module.css'

const DarkmodeusingCH = () => 
{

    let {updateMode,isbool}=useMode()

    return (
        <div className={msty.div}>
            <button onClick={updateMode}>{isbool?"DarkMode":"LightMode"}</button>
        </div>
    )
}

export default DarkmodeusingCH