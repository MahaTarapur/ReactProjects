import React, { useEffect, useState } from 'react'

// ^Using Promises

function ApiGitHubUsers()
{
    let [users,setUsers]=useState([])

    useEffect(()=>
    {
        let gitusers=fetch("http://api.github.com/users")
        gitusers.then((res)=>
        {
            return res.json()
        }).
        then((apiData)=>
        {
            setUsers(apiData)
        })
    },[])
console.log(users);
    return (
        <div>
            <ul>
                {users.map(({id,avatar_url})=>
                {
                    return <li key={id}>
                        <img src={avatar_url} height="200px" alt="" />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ApiGitHubUsers