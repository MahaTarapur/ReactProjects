import React from 'react'

const UseCallBackChildOne = () => 
{
    console.log("ChildOne Rendered");
    return (
        <div>
            
        </div>
    )
}

// export default UseCallBackChildOne

export default React.memo(UseCallBackChildOne)
