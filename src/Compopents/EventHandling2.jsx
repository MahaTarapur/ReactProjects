import React from 'react'

const EventHandling2 = () => {

    let getData=(e)=>
    {
        console.log(e.target); // returns the tag from where the event is called
        console.log(e.type); //returns the type of event eg:onclick,ondblclick,onmouseup etc
    }
    return (
        <div>
            <button onClick={getData}>Click</button>
        </div>
    )
}

export default EventHandling2