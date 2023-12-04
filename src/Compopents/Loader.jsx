import React from 'react'
import l from './css/Loader.module.css'

const Loader = () => {
    return (
        <div className={l.div}>
            <div className={l.loader}></div>
        </div>
    )
}

export default Loader