import React from 'react'
import logostyles from './Logo.module.css'

const Logo = () => {
    return (
        <div className={logostyles.imgdiv}>
            <div className={logostyles.maindiv}>
            <div className={logostyles.icondiv} ><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
            <div className={logostyles.icondiv} ><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
            <div className={logostyles.icondiv} ><i className="fa fa-instagram" aria-hidden="true"></i></div>
            <div className={logostyles.icondiv} ><i className="fa fa-linkedin-square" aria-hidden="true"></i></div>
            </div>
        </div>
    )
}

export default Logo