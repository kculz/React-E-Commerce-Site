import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="nav">
                <div className="container navbar">
                    <div className="logo">
                        E-Shop
                    </div>
                   <div  className="nav-items">
                   <div className='link-items'>
                        <NavLink to="" className="nav-link">Become a Seller</NavLink>
                        <NavLink to="" className="nav-link btn">Buy Online</NavLink>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                      
                    </div>
                   </div>
                </div>
               
            </div>
        </div>
    )
}

export default Navbar
