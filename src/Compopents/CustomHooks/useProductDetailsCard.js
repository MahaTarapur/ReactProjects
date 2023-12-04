import React from 'react'
import styl from './ProductDetailsCard.module.css'

const useProductDetailsCard = ({cardcomp}) => 
{
    return (
        <div key={cardcomp.id} className={styl.maindiv}>
            <div className={styl.card}>
                <h1 className={styl.ttl}>{cardcomp.title}</h1>
                <div className={styl.imgdiv}>
                    <img src={cardcomp.image} alt="" />
                    <div className={styl.btns}>
                    <button>Buy Now</button>
                    <button>Add to Cart</button>
                    </div>
                </div>
                <div className={styl.detail}>
                    <p>{cardcomp.category}</p>
                    <p>{cardcomp.color}</p>
                    <p>{cardcomp.price}</p>
                    <p>{cardcomp.rating}</p>
                    <h6 className={styl.desc}>{cardcomp.description}</h6>
                </div>
            </div>
        </div>
    )
}

export default useProductDetailsCard