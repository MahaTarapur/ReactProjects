import React from 'react'

const ConditionalRendering3 = () => {
    let isBool=true
    let day="Sunday"

    return (
        <div>
            <h1>{isBool?"YES Holiday":"NO Holiday"} </h1>
            <h1>{day && day}</h1>
            {/* <h1>{day2 || day1}</h1> */}
        </div>
    )
}

export default ConditionalRendering3