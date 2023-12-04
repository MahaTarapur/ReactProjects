import React from 'react'
import { useFetch } from './useFetch'
import Loader from '../Loader'

const FakestoreApi = () => 
{
    let {apiData,isloading,iserror}=useFetch("https://fakestoreapi.com/products")

    return (
        <div>
            <h1>{isloading && <Loader/>}</h1>        
            <h1 style={{color:"red",fontSize:"40px",textAlign:"center"}}>{iserror && "Error...!!!!"}</h1>

            {apiData.map(({id,title,image})=>
            {
                return (<div key={id}>
                <h2>{title}</h2>
                <img src={image} height="200px" alt="" />
                </div>)
            })}
        </div>
    )
}

export default FakestoreApi