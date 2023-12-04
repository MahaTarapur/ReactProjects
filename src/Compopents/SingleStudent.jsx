import React  from 'react'
import StudentImage from './StudentImage'
import StudentName from './StudentName'

function SingleStudent({name,image})
{
    return (
        <>
            <h2>Single Student</h2>
            <StudentImage image={image}/>
            <StudentName name={name}/>
        </>
    )
}

export default SingleStudent