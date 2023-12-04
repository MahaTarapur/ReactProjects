import React from 'react'

function ConditionalRendering()
{
    let day="Sunday"

    if(day==="Sunday")
    {
        return <h1>Holiday</h1>
    }
    else if(day==="Monday")
    {
        return <h1>Working Day</h1>
    }
    return (
        <div>
            <h1>I am Conditional Rendering Component</h1>
        </div>
    )
}

export default ConditionalRendering