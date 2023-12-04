import React from 'react'
import NavigationBar from './NavigationBar'
import routerStyles from './Router.module.css'
import { Outlet } from 'react-router-dom'

const ProductsPage = () => {
    return (
        <div>
            <NavigationBar navNames={{key1:"Cameras",key2:"Earphones",key3:"Laptops",key4:"Mobiles",key5:"Telivisions"}} 
            navPaths={{url1:"cameras",url2:"earphones",url3:"laptops",url4:"mobiles",url5:"telivisions"}}
            navStyles={routerStyles.productsnav} anchorStyles={routerStyles.productsanchor}/>
            <h2>Products</h2>
            <div><Outlet/></div>
        </div>
    )
}

export default ProductsPage