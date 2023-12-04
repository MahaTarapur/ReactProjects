import React, { useRef } from 'react'

const UseRefEg2 = () => 
{
    let btnRef=useRef()
    let printData=()=>
    {
        btnRef.current.style.display="none"
        window.print()
        btnRef.current.style.display="inline"
    }
    return (
        <div>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <button onClick={printData} ref={btnRef}>Print</button>
        </div>
    )
}

export default UseRefEg2