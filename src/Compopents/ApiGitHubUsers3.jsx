import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

// ^Using Axios third party library

function ApiGitHubUsers3()
{
    let[users,setUsers]=useState([])

    useEffect(()=>
    {
    async function getgituserdata()        
    {
        let gitusers=await axios.get("http://api.github.com/users")
        setUsers(gitusers.data)
    }
    getgituserdata()
    },[])

    return (
        <div>
            <ul>
                {users.map(({id,avatar_url})=>
                {
                    return <li key={id}>
                        <img src={avatar_url} alt="" />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ApiGitHubUsers3