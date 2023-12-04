import React from 'react'

const UseCallBackChildTwo = () => 
{
    console.log("ChildTwo Rendered");
    return (
        <div>
            
        </div>
    )
}

// export default UseCallBackChildTwo

export default React.memo(UseCallBackChildTwo)