import React from 'react'
import { useFetch } from './useFetch'
import Loader from '../Loader'

const GithubUsers = () => 
{
    let {apiData,isloading,iserror}=useFetch("https://api.github.com/users")

    return (
        <div>
            <h1>{isloading && <Loader/>}</h1>        
            <h1 style={{color:"red",fontSize:"40px",textAlign:"center"}}>{iserror && "Error...!!!!"}</h1>

            {apiData.map(({id,login,avatar_url})=>
            {
                return (<div key={id}>
                <h2>{login}</h2>
                <img src={avatar_url} height="200px" alt="" />
                </div>)
            })}
        </div>
    )
}

export default GithubUsers