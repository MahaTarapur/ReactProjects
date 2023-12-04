import axios from 'axios'
import React, { useEffect } from 'react'
import { useReducer } from 'react'
import apistyle from './ApiUseReducer.module.css'
import Loader from '../Loader'

let initialState={
    newProducts:[],
    isError:false,
    isLoading:true
}

let productsReducer=(currentState,action)=>
{
    switch(action.type)
    {
        case "Fetch_Successfull":return {...currentState,newProducts:action.payload,isLoading:false}
        case "Fetch_Error":return {...currentState,isError:true,isLoading:false}
    }
    return currentState
}

function ApiErrorLoaderReducer()
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
            productsDispatcher({type:"Fetch_Error"})
        }
    }

    useEffect(()=>
    {
        getProducts()
    },[])

    return (
        <div className={apistyle.maindiv}>
            <div className={apistyle.loaderError}>
            <h1>{products.isLoading && <Loader/>}</h1>
            <h1 style={{color:"Red"}}>{products.isError && "ERROR"}</h1>
            </div>
            {products.newProducts.map(({id,title,price,description,image})=>
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

export default ApiErrorLoaderReducer