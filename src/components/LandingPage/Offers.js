import React from 'react'
import DeliveriesPic from '../../illustration/deliveries.svg'
import OnlineShoppingPic from '../../illustration/webshopping.svg'
import OnlineShopping from '../../illustration/onlineshopping.svg'
import AroundTheWorld from '../../illustration/aroundtheworld.svg'
import { NavLink } from 'react-router-dom'



const Offers = () => {
    return (
        <div className='offers'>
            <div className="container">
                <div className="heading">
                    <h1>What E-Shop offers</h1>
                </div>
                <div className="grid-3 gap-2">
                    <div className="col">
                        <div className="card">
                            <img src={OnlineShoppingPic}  alt="img" />
                        </div>
                        <h3 className="secondary-heading"><span className='em-rounded'>1</span> Online Selling</h3>
                        <p className="lead-text"> Become an E-Seller and showcase your products to potential customers around the Globe.</p>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={OnlineShopping} alt="img" />
                        </div>
                        <h3 className="secondary-heading"><span className='em-rounded'>2</span> Online Shopping </h3>
                        <p className="lead-text"> Join and browse for goods of all sorts.</p>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={DeliveriesPic} alt="img" />
                        </div>
                        <h3 className="secondary-heading"><span className='em-rounded'>3</span> Home Deliveries</h3>
                        <p className="lead-text"> Get your goods delived to you, wherever you are.</p>
                    </div>
                </div>
            </div>

            <div className="grid mt-5 gap-5 container location">
                <div className="col">
                    <img src={AroundTheWorld} alt="img" />
                </div>
                <div className="col">
                    <h3 className="secondary-heading">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className="lead-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, earum iusto. Esse, dolorum magnam assumenda fuga fugiat quibusdam expedita deleniti nobis commodi quidem vel deserunt exercitationem laudantium quasi sed totam.</p>
                    <div className='mt-3'>
                        <NavLink to="/login" className="btn">Let's Go</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Offers
