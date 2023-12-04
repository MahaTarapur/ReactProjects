import React from 'react'

const EventHandling = () => {

    // Writing function and assigning function name to event handler
    let getData=()=>
    {
        console.log("getData Executed");
    }
    return (
        <div>
            <button onClick={getData}>getData</button>

            {/* directly writing function in event handler */}
            <button onClick={()=>
                {
                    console.log("Arrow Function");
                }}>Arrow Function</button>
            
        </div>
    )
}

export default EventHandling