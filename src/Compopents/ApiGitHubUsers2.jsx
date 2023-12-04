import React, { useEffect, useState } from 'react'

// ^Using async and await

function ApiGitHubUsers2()
{
    let [users,setUsers]=useState([])

    // ! We cannot use async keyword for useEffects callback function because
    // ! it should always return clean up function but the async function returns promise
    // ! Hence write another function inside useEffects callback function and make it asynchronous and call it immediately

    useEffect(()=>
    {
    async function getgituserdata()        
    {
        let gitusers=await fetch("http://api.github.com/users")
        gitusers=await gitusers.json()
        setUsers(gitusers)
    }
    getgituserdata()
    },[])

    // !Or

    /*
    async function getgituserdata()        
    {
        let gitusers=await fetch("http://api.github.com/users")
        gitusers=await gitusers.json()
        setUsers(gitusers)
    }

    useEffect(()=>
    {
       getgituserdata()
    },[])
    */

    // !Or
    
    /*
    useEffect(()=>
    {
       getgituserdata()
    },[])
    
    async function getgituserdata()        
    {
        let gitusers=await fetch("http://api.github.com/users")
        gitusers=await gitusers.json()
        setUsers(gitusers)
    }
    */

    return (
        <div>
            <ul>
                 {users.map(({id,avatar_url,login})=>
                {
                    return <div key={id}>
                        <h1>{id}. {login}</h1>
                        <img src={avatar_url} height="200px" width="200px" alt="" />
                    </div>
                })}
            </ul>
        </div>
    )
}

export default ApiGitHubUsers2