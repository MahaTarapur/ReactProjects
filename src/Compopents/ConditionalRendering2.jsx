import React from 'react'

function ConditionalRendering2()
{
    let day="Monday"

    return (
        <div>
            {/* Short Circuit Operator */}
            {/* && if true executes the statement next to it, if false executes the same statement */}
            {/* || if true executes the same statement,if false executes the statement next to it */}
            {/* When it executes the same statement nothing will be displayed on UI  */}
            {/* because they are boolean values and boolean values will not be displayed on UI */}
            {day==="Sunday" || <h1>Holiday of ||</h1>}
            {day==="Sunday" && <h1>Holiday of &&</h1>}
            <h1>I am Conditional Rendering Component</h1>
        </div>
    )
}

export default ConditionalRendering2