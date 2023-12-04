import axios from 'axios'
import React, { useEffect, useState } from 'react'
import fa from './css/Fakestore.module.css'

function FakestoreAssgn()
{
    let[data,setData]=useState([])
    
    useEffect(()=>
    {
        async function getapidata()
        {
            let apidata=await axios.get("https://fakestoreapi.com/products")
            setData(apidata.data)
        }
        getapidata()
    },[])

    return (
        <div>

            {data.map(({id,title,image,price,description})=>
            {
                return (
                    <div key={id} className={fa.div}>
                        <div className={fa.titleprice}>
                        <h2 className={fa.title}>{id}.{title}</h2>
                        <h2 className={fa.price}>{price}</h2>
                        </div>
                        <hr />
                        <div className={fa.imgdes}>
                        <img className={fa.image} height="200px" width="200px" src={image} alt="" /> 
                        <p>{description}</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default FakestoreAssgn