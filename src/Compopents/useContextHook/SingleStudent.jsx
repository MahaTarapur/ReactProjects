import React, { Fragment } from 'react'
import StudentImage from './StudentImage'
import StudentName from './StudentName'

function SingleStudent()
{
    return (
        <Fragment>
                <StudentImage/>
                <StudentName/>
        </Fragment>
    )
}

export default SingleStudent