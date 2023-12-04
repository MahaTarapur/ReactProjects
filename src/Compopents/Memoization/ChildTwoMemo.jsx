import React from 'react'

function ChildTwoMemo()
{
    console.log("ChildTwo Rendered");
    return (
        <div>
            
        </div>
    )
}

export default React.memo(ChildTwoMemo)
// export default ChildTwoMemo