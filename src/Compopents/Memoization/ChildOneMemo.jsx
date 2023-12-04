import React from 'react'

function ChildOneMemo()
{
    console.log("ChildOne Rendered");
    return (
        <div>
            
        </div>
    )
}

export default React.memo(ChildOneMemo)
// export default ChildOneMemo

// !OR

// import React, { memo } from 'react' in line 1
// export default memo(ChildOneMemo) in line 13