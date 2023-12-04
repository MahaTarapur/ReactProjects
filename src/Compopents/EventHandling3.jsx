import React from 'react'

const EventHandling3 = () => {

    let colors=['red', 'green' , 'pink', 'orange']
    let getIndex=(i)=>
    {
        console.log(i);
    }
    return (
        <div>
            <ol style={{margin:"50px"}}>
                {colors.map((color,index)=>
                {
                    return <li key={index}>{color}
                    {/* If we invoke directly the component will be loaded and index positions will be printed */}
                    {/* <button onClick={getIndex(index)}>Get Index</button> */}

                    {/* invoking the mainfunction by placing it inside another function */}
                    {/* main function will be invoked only when we invoke the outer function */}
                    {/* outer function will invoke when component is loaded but it will be having nothing to execute hence nothing will happen */}
                    {/* main function will execute only when we call outer function by eventhandler */}
                    <button onClick={()=>
                    {
                        getIndex(index)
                    }}>Get Index</button>
                    </li>
                })}
            </ol>

        </div>
    )
}

export default EventHandling3