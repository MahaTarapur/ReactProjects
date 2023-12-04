import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'


// ^ Displaying loading effect till api is loaded fetched and displayed

function ApiGitHubUsers4()
{
    let[users,setUsers]=useState([])
    let[isloading,setIsloading]=useState(true)
    let[iserror,setIserror]=useState(false) 

    async function getgituserdata()        
    {
        try
        {
            let gitusers=await axios.get("http://api.github.com/users")
            setUsers(gitusers.data)
            console.log(gitusers);
            setIsloading(false)
            setIserror(false)
        }
        catch(err)
        {
            setIsloading(false)
            setIserror(true)
        }
    }
    useEffect(()=>
    {
    getgituserdata()
    },[])

    return (
        <div>
            <h1>{isloading && <Loader/>}</h1>
            <h1 style={{color:"red"}} >{iserror && "Errorr....!!!!!!!"}</h1>
                {users.map(({id,avatar_url})=>
                {
                    return <li key={id}>
                        <img src={avatar_url} width="200px" height="200px" alt="" />
                    </li>
                })}
        </div>
    )
}

export default ApiGitHubUsers4