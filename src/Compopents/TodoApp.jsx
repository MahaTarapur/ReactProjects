import React, { useState } from 'react'
import todostyle from "./css/TodoApp.module.css"

function TodoApp()
{
    let [task,setTask]=useState("")
    let [tasks,setTasks]=useState([])
    let [displaymsg,setDisplaymsg]=useState("")

    let changeTask=({target:{value}})=>
    {
        setTask(value)
    }

    let addTask=()=>
    {
        setTasks([...tasks,task])
        setTask("")
        setDisplaymsg("Added Successfully")
        setTimeout(()=>
        {
            setDisplaymsg("")
        },2000)
        
    }
    
    let deleteTask=(index)=>
    {
        let remainingTasks=tasks.filter((t,i)=>
        {
            return index!=i
        })
        setTasks(remainingTasks)
        setDisplaymsg("Deleted Successfully")
        setTimeout(()=>
        {
            setDisplaymsg("")
        },2000)
    }

    return (
        <>
        <h2 className={todostyle.message}>{displaymsg}</h2>
        <section className={todostyle.mainbox}>
            <div className={todostyle.upbox}>
                <input type="text" placeholder='Task' onChange={changeTask} value={task} />
                <button onClick={addTask}>Add</button>
            </div>
            <div className={todostyle.downbox}>
                {tasks.map((t,i)=>
                {
                    return <div className={todostyle.list} key={i}>
                        <span>{t}</span>
                        <button onClick={()=>
                                        {
                                            deleteTask(i)
                                        }}>Delete</button>
                    </div>
                })}
            </div>
        </section>
        </>
    )
}

export default TodoApp