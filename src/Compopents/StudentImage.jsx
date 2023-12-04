import React from 'react'

function StudentImage({image})
{
    return (
        <>
        <h3>Student Image</h3>
        <img width="200px" height="200px" src={image} alt="Image" />
        </>
    )
}

export default StudentImage