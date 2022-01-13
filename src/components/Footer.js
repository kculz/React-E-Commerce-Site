import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="footer bg-dark">
                <div className="grid container">
                    <div className="col"><h2 className="secondary-heading">E-Shop</h2></div>
                    <div className="col">
                    
                    </div>
                    <div className="col">
                    <h2 className="secondary-heading"> Customers</h2>
                    <ul>
                        {/* <li className="lead-text"><NavLink to='/' className='Link'> Become a Seller</NavLink></li>
                        <li className="lead-text"><NavLink to='/' className='Link'>Shop online</NavLink></li>
                        <li className="lead-text"><NavLink to='/' className='Link'>Contact Seller</NavLink></li>
                        <li className="lead-text"><NavLink to='/' className='Link'>Quote Delivery</NavLink></li>
                        <li className="lead-text"><NavLink to='/' className='Link'>Seller review</NavLink></li> */}
                    </ul>
                    </div>
                    <div className="col">
                    <h2 className="secondary-heading"> Clients</h2>
                    <ul>
                    {/* <li className="lead-text"><a href='' className='Link'> Seller Login</a></li>
                        <li className="lead-text"><a href='' className='Link'>Buyer Login</a></li>
                        <li className="lead-text"><a href='' className='Link'>Seller Community</a></li>
                        <li className="lead-text"><a href='' className='Link'>Seller Stories</a></li> */}
                    </ul>
                    </div>
                    <div className="col">
                    <h2 className="secondary-heading"> Company</h2>
                    <ul>
                    {/* <li className="lead-text"><a href='' className='Link'> Blog</a></li>
                        <li className="lead-text"><a href='' className='Link'>Press</a></li>
                        <li className="lead-text"><a href='' className='Link'>About Us</a></li>
                        <li className="lead-text"><a href='' className='Link'>E-Shop Reviews</a></li> */}
                    </ul>
                    </div>
                </div>
                <div className="flex container">
                <div className="col">
                    <div className="social-links">

                    </div>
                    <p className="copyrights lead-text">&copy; 2021 E-Shop</p>
                    <p className="location lead-text">Company Res Address</p>
                </div>
                <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
