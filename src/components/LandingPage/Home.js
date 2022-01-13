import React from 'react'
import { NavLink } from 'react-router-dom'
import LandingPagePic from '../../illustration/LandingPagePic.svg'
const Home = () => {
    return (
        <section className='landing-page'>
            <div className="container">
            <div className=" grid gap-5">
                <div className="col landing-page-content">
                    <div className="heading">
                        <h1>
                            Shop and Sell online with
                            <br/> E-Shop
                        </h1>
                    </div>
                    <p className="lead-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi vel natus, explicabo minus officia nesciunt ducimus! Velit delectus blanditiis qui harum voluptates totam asperiores sit, omnis quam officia possimus.
                    </p>
                    <div>
                    <NavLink to="/login" className="btn">Start Shopping</NavLink>
                    </div>
                    <span className="secondary-text">Want to be a Seller instead? <NavLink to='/signup' className=''>Become a Seller</NavLink></span>
                </div>
                <div className="col">
                    <img src={LandingPagePic} alt="img" />
                    
                </div>
            </div>
            </div>
           
        </section>
    )
}

export default Home
