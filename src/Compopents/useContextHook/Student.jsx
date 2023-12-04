// import React, { createContext } from 'react'
// import SingleStudent from './SingleStudent'
// import {students as studentData} from './studentDetails'

// export let StudentContext=createContext()

// function Student()
// {
//     return (
//         <div>
//             {studentData.map(({id,name,image})=>
//             {
//                 return <div  key={id}>
//                     <StudentContext.Provider value={{name,image}}>
//                     <SingleStudent/>
//                     </StudentContext.Provider>
//                 </div> 
//             })}            
//         </div>
//     )
// }

// export default Student


// ! createContext Example 2

// import React, { createContext } from 'react'
// import SingleStudent from './SingleStudent'
// import {students as studentData} from './studentDetails'

// export let StudentContext=createContext()
// export let EmployeeContext=createContext()

// function Student()
// {
//     return (
//         <div>
//             {studentData.map(({id,name,image})=>
//             {
//                 return <>
//                     <StudentContext.Provider key={id} value={{name,image}}>
//                         <EmployeeContext.Provider value="Bad Employee">
//                             <SingleStudent/>
//                         </EmployeeContext.Provider>
//                     </StudentContext.Provider>
//                 </>
//             })}            
//         </div>
//     )
// }

// export default Student

// ! Using useContextHook to reduce consumers code in student.name

// import React, { createContext } from 'react'
// import SingleStudent from './SingleStudent'
// import {students as studentData} from './studentDetails'

// export let StudentContext=createContext()
// export let EmployeeContext=createContext()

// function Student()
// {
//     return (
//         <div>
//             {studentData.map(({id,name,image})=>
//             {
//                 return <div  key={id}>
//                 <StudentContext.Provider value={{name,image}}>
                    // <EmployeeContext.Provider value='Happy Employee'>
                    //     <SingleStudent/>
                    // </EmployeeContext.Provider>
//                 </StudentContext.Provider>
//                 </div>
//             })}            
//         </div>
//     )
// }

// export default Student


// ! Using default values

import React, { createContext } from 'react'
import SingleStudent from './SingleStudent'
import {students as studentData} from './studentDetails'

export let StudentContext=createContext()
export let EmployeeContext=createContext("Average Employee")

function Student()
{
    return (
        <div>
            {studentData.map(({id,name,image})=>
            {
                return <div  key={id} >
                <StudentContext.Provider value={{name,image}}>
                        <SingleStudent/>
                </StudentContext.Provider>
                </div>
            })}            
        </div>
    )
}

export default Student


