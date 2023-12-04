import React, { useEffect, useState } from 'react'

const UseEffectScenario = () => 
{

    let[count,setCount]=useState(0)
    let[EvenOdd,setEvenOdd]=useState("Even")
    // let update=()=> 
    // {
    //     setCount(count+1)
    //     if(count%2==0)
    //     {
    //         setEvenOdd("Even")
    //     }
    //     else
    //     {
    //         setEvenOdd("Odd")
    //     }
    // }

    // let[count,setCount]=useState(0)
    // let[EvenOdd,setEvenOdd]=useState("")
    // let pv;
    // let update=()=> 
    // {
    //     setCount(count+1)
    //     setCount((pv)=>
    //     {
    //         return pv
    //     })  
    //     console.log(pv);
    //     console.log(count);
    //     if(count%2==0)
    //     {
    //         setEvenOdd("Even")
    //     }
    //     else
    //     {
    //         setEvenOdd("Odd")
    //     }      
    // }

   

    // let update=()=>
    // {
    //     setCount(count+1)
    //     setCount((pv)=>
    //     {
    //         return pv
    //     })

    // }

    let update=()=>
    {
        setCount(count+1)
    }
    useEffect(()=>  
    {
        if(count%2===0)
        {
            setEvenOdd("Even")
        }
        else
        {
            setEvenOdd("Odd")
        }
    })

    

   


    // let[count,setCount]=useState(0)
    // let updateCounter=()=>
    // {
    //     if(count!==5)
    //     {
    //         setCount(count+1)
    //     }
    // }


    // let[count,setCount]=useState(0)
    // let[sname,setSname]=useState("John")
    // useEffect(()=>
    // {
    //     console.log(1);
    //     setInterval(() => {
    //         setCount(count+1)
    //     }, 2000);
    // },[sname])
    // useEffect(()=>
    // {
    //     console.log(2);
    //     setInterval(() => {
    //         setSname("Miller")
    //     }, 2000);
    // },[count])


    // let[count,setCount]=useState(0)
    // let[count1,setCount1]=useState(0)
    // let update=()=> 
    // {
    //     setCount(count+1)
    // }

    // let update1=()=>
    // {
    //     setCount1(count1+1)
    // }
    
    return (
      <div>
        <h1>Count:{count}::{EvenOdd}</h1>
        <button onClick={update}>Update</button>
      </div>
    );
}

export default UseEffectScenario