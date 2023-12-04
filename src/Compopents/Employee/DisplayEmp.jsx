import React from 'react'
import employees from './Empdeatils'
import Logo from './Logo'
import empcard from './DisplayEmp.module.css'

const DisplayEmp = () => 
{
    return (
        <div className={empcard.maindiv}>
           {employees.map(({id,name,image,designation})=>
           {
            return(
                <div className={empcard.carddiv} key={id}>
                    <img className={empcard.imgdiv} src={image} alt="" />
                    <div className={empcard.logodiv}><Logo/></div>
                    <h3 className={empcard.name}>{name}</h3>
                    <p className={empcard.desgn}>{designation}</p>
                </div>
            )
           })} 
        </div>
    )
}

export default DisplayEmp