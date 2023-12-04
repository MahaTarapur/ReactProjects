import React, { useEffect } from 'react'
import { useState } from 'react'
import style from './css/Form3Assgn.module.css'

function Form3Assgn()
{
    let [data,setData]=useState({fn:"",ln:"",age:"",mobile:"",gender:"",email:"",password:""})
    let [clear,setClear]=useState()


    let updateData=({target:{name,value}})=>
    {
        setData({...data,[name]:value})
    }
    let sendData=(event)=>
    {
        event.preventDefault()
        console.log(data);
        displayUsers()
    }

    let [newarray,setNewarray]=useState([])
    let displayUsers=()=>
    {
        setNewarray([...newarray,data])
        setClear("")
        setTimeout(()=>
        {
            console.log("st");
            setClear()
        },1000)
    }

    let searchValue
    let getSearchValue=(e)=>
    {
        searchValue=e.target.value
        console.log(e.target.value);
        console.log(searchValue);
    }
    
    let [filteredArray,setFilteredArray]=useState([])

    let getfilteredArray=()=>
    {
        setFilteredArray(newarray.filter(({fn})=>
        {
            return fn===searchValue
        }))
    }

    return (
        <div className={style.maindiv}>
            <div className={style.searchdiv}>
                <input type="search" placeholder='Search user' onChange={getSearchValue} />
                <button onClick={getfilteredArray}>Search</button>
            </div> 
            <form className={style.formdiv} action="" onSubmit={sendData}>
                <input required type="text" placeholder="FirstName" name="fn" value={clear} onChange={updateData} />
                <input required type="text" placeholder="LastName" name="ln" value={clear} onChange={updateData} />
                <input required type="number" placeholder="Age" name="age" value={clear} onChange={updateData} />
                <input required type="tel" placeholder="MobileNumber" name="mobile" value={clear} onChange={updateData} />
                <input required type="text" placeholder="Gender" name="gender" value={clear} onChange={updateData} />
                <input required type="email" placeholder="Email" name="email" value={clear} onChange={updateData} />
                <input required type="password" placeholder="Password" name="password" value={clear} onChange={updateData} />
                <button>Register</button>
            </form> 
            {
                filteredArray.map((users,index)=>
                {
                    return(
                        <div className={style.databox} key={users.email}>
                            <h3>Name:{` ${users.fn} ${users.ln}`}</h3>
                            <h3>Age:{` ${users.age}`}</h3>
                            <h3>Mobile No:{` ${users.mobile}`}</h3>
                            <h3>Gender:{` ${users.gender}`} </h3>
                            <h3>Email:{` ${users.email}`}</h3>
                        </div>
                    )  
                })
            }
        </div>
    )
}

export default Form3Assgn


