import axios from 'axios'
import React, { useState,useEffect} from 'react'
import Style from './css/MoviesAssgn.module.css'

let getmoviedata

function MoviesAssgn()
{
    let [moviename,setMoviename]=useState()
    let[moviedata,setMoviedata]=useState([])

    let searchName=(e)=>
    {
        setMoviename(e.target.value)
        setMoviename((pv)=>
        {
            // console.log(pv);
            return pv
        })
    }

    getmoviedata=async()=>
        {
            let apimoviedata=await axios.get(`http://www.omdbapi.com/?s=${moviename}&apikey=4cd85b02`)
            if(moviename==undefined)
            {
                setMoviedata(null)
            }
            else
            {
            setMoviedata(apimoviedata.data.Search)
            }
        }

    let searchdata=(event)=>
    {
        event.preventDefault()
    }

    return (
        <div className={Style.body}>
        <div className={Style.top}>
            <form action="" onSubmit={searchdata}>
                <input className={Style.input} type="search" onKeyDown={getmoviedata} placeholder='Search' onChange={searchName}/>
                <button className={Style.button} onClick={getmoviedata}>Search</button>
            </form>
        </div >
            
            <div className={Style.flex}>
            {moviedata?.map(({imdbID,Title,Poster})=>
            {
                return(
                        <div className={Style.moviebox} key={imdbID}>
                        <img width="200px" height="200px" src={Poster} alt="" />
                        <h4>{Title}</h4>
                        </div>
                )
            })}
            </div>
        
        </div>
    )
}

export default MoviesAssgn