import axios from 'axios'
import React, { useEffect } from 'react'
import { useReducer } from 'react'
import apistyle from './ApiUseReducer.module.css'

let initialState=[]

let productsReducer=(currentState,action)=>
{
    switch(action.type)
    {
        case "Fetch_Successfull":return action.payload
    }
    return currentState
}

function ApiUseReducer()
{
    let [products,productsDispatcher]=useReducer(productsReducer,initialState)

    let getProducts=async()=>
    {
        try{
            let {data}=await axios.get("https://fakestoreapi.com/products")
            productsDispatcher({type:"Fetch_Successfull",payload:data})
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>
    {
        getProducts()
    },[])

    return (
        <div className={apistyle.maindiv}>
            {products.map(({id,title,price,description,image})=>
            {
                return(
                        <div key={id} className={apistyle.carddiv}>
                            <h3>{id}. {title}</h3>
                            <img src={image} alt="" />
                            <h3>${price}</h3>
                            <p>{description}</p>
                        </div>
                )
            })}
        </div>
    )
}

export default ApiUseReducer