import React, { useRef } from 'react'

const UseRefEg1 = () => 
{

    let inputRef=useRef(null)
    console.log(inputRef);

    let focusinput=()=>
    {
        inputRef.current.focus()
    }

    // ! if you want to auto focus call it in use effect
    // useEffect(()=>
    // {
    // focusinput()
    // })
 
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={focusinput}>Focus</button>
        </div>
    )
}

export default UseRefEg1