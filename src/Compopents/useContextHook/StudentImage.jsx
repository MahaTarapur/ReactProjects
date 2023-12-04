import React from 'react'
import { StudentContext } from './Student'

function StudentImage({image})
{
    return (
       <>
       <StudentContext.Consumer>
        {({image})=>
        {
            return <div>
                <img src={image} height="300px" width="220px" alt="" />
            </div>
        }}
       </StudentContext.Consumer>
       </>
    )
}

export default StudentImage


// ! reducing consumers code by using useContext hook

// import React, { useContext } from 'react'
// import { StudentContext } from './Student'

// function StudentImage()
// {
//     let sdata=useContext(StudentContext)
//     return (
//        <div>
//                 <img src={sdata.image} height="300px" width="220px" alt="" />
//         </div>)
// }

// export default StudentImage