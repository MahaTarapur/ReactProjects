import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar({navNames,navPaths,navStyles,anchorStyles})
{
    
    return (
            <nav className={navStyles}>
                <Link className={anchorStyles} to={navPaths.url1}>{navNames.key1}</Link>
                <Link className={anchorStyles} to={navPaths.url2}>{navNames.key2}</Link>
                <Link className={anchorStyles} to={navPaths.url3}>{navNames.key3}</Link>
                <Link className={anchorStyles} to={navPaths.url4}>{navNames.key4}</Link>
                <Link className={anchorStyles} to={navPaths.url5}>{navNames.key5}</Link>
            </nav>
    )
}

export default NavigationBar