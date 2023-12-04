// import React from 'react'
// import { StudentContext } from './Student'

// function StudentName()
// {
//     return (
//         <>
//         <StudentContext.Consumer>
//             {({name})=>
//             {
//                 return <div>
//                     <h3>{name}</h3>
//                     <p>Good Student</p>
//                 </div>
//             }}
//         </StudentContext.Consumer>
//         </>
//     )
// }

// export default StudentName   

// !useContext Second Example

// import React from 'react'
// import { EmployeeContext, StudentContext } from './Student'

// function StudentName()
// {
//     return (
//         <>
//         <StudentContext.Consumer>
//             {({name})=>
//             {
//                return <EmployeeContext.Consumer>
//                 {(edata)=>
//                 {
//                     return <>
//                     <h3>{name}</h3>
//                     <p>{edata}</p>
//                     </>
//                 }}
//                </EmployeeContext.Consumer>
//             }}
//         </StudentContext.Consumer>
//         </>
//     )
// }

// export default StudentName

// !useContext and default values for useContext

import React, { useContext } from 'react'
import { EmployeeContext, StudentContext } from './Student'

function StudentName()
{

    let sdata=useContext(StudentContext)
    let edata=useContext(EmployeeContext)
    console.log(sdata);//Returns the data sent by StudentContext
    console.log(edata);//Returns the data sent by EmployeeContext
    return (
        <>
        <h1>{sdata.name}</h1>
        <p>{edata}</p>
        </>
    )
}

export default StudentName
