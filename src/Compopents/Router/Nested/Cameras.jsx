import React, { useState } from 'react'
import img1 from '../images/cam1.jpg'
import img2 from '../images/cam2.jpg'
import img3 from '../images/cam3.jpg'
import img4 from '../images/cam4.jpg'
import img5 from '../images/cam5.jpg'
import img6 from '../images/cam6.jpg'
import cameras from '../CameraDetails'
let Id
const Cameras = () => 
{
    let[isbool,setIsbool]=useState(false)

    let display=()=>
    {
        setIsbool(true)
    }

    let [photo,setPhoto]=useState(img1)
    let update=(e)=>
    {
        display()
        Id=e.target.id
        setPhoto(e.target.src)
        setPhoto((pv)=>
        {
            return pv
        })
    }

    return (
        <div>
            <h4>Cameras</h4>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <img style={{ padding:"4px",borderRadius:"4px", border: "2px solid black"}} id='1' height="120px" width="120px" src={img1} alt="" onClick={update} />
                        <img style={{ padding:"4px",borderRadius:"4px", border: "2px solid black"}} id='2' height="120px" width="120px" src={img2} alt="" onClick={update} />
                        <img style={{ padding:"4px",borderRadius:"4px", border: "2px solid black"}} id='3' height="120px" width="120px" src={img3} alt="" onClick={update} />
                        <img style={{ padding:"4px",borderRadius:"4px", border: "2px solid black"}} id='4' height="120px" width="120px" src={img4} alt="" onClick={update} />
                        <img style={{ padding:"4px",borderRadius:"4px", border: "2px solid black"}} id='5' height="120px" width="120px" src={img5} alt="" onClick={update} />
                        <img style={{ padding:"4px",borderRadius:"4px", border: "2px solid black"}} id='6' height="120px" width="120px" src={img6} alt="" onClick={update} />
            </div>
            <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                <img style={{ border: "2px solid black",marginTop:"10px",borderRadius:"10px"}} height="400px" width="500px" src={photo} alt="" />
                {isbool && <div style={{border: "2px solid black",borderRadius:"10px", height:"400px",width:"500px"}}>
                <h1>Product Detail</h1>
                {cameras.map(({id,name,price,description})=>
                {
                    if(Id==id)
                        return (<div key={id}>
                            <h2>Product Name:{name}</h2>
                            <h3>Price:{price} Rs</h3>
                            <p>Description:{description}</p>
                        </div>)
                })}
                </div>}
            </div>
        </div>
    )
}

export default Cameras