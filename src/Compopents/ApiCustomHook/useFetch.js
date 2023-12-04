import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetch(url)
{
    let [apiData,setApiData]=useState([])
    let [isloading,setIsloading]=useState(true)
    let [iserror,setIserror]=useState(false)

    let getApiData=async()=>
    {
        try
        {
            let {data}=await axios.get(url);
            setApiData(data)
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
        setIsloading(true)
        getApiData()
    },[])


    return {apiData,isloading,iserror}
}

export {useFetch}