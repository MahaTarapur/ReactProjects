import React from 'react'
import SingleStudent from './SingleStudent'
import StudentStyle from './css/Student.module.css'
import {students as studentDetails} from './StudentDetails'

function Student()
{
    return (
        <React.Fragment>
            <div className={StudentStyle.sdiv}>
            <h1>Student</h1>
            {studentDetails.map(({id,name,image})=>
            {
                return(
                <div key={id} className={StudentStyle.ssdiv}>
                <SingleStudent name={name} image={image}/>
            </div>
                )
            })}
            </div>
        </React.Fragment>
    )
}

export default Student