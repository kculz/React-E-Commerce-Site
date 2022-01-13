import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'
import {withRouter} from 'react-router'



const ProductsView = ({computerAndAccessories}) => {
    
    return (
        <div>
            <div className="container">
                <div className='cart-btn  '>
                    <div>
                        <NavLink to='' className='cart-items card'>
                            $00.00
                            <FaShoppingCart size={30}/>
                        </NavLink>
                       
                    </div>
                </div>
                <legend>
                    <h1 className='headings'>Computers and Accessories</h1>
                </legend>
                <div className="card">
                <div className="grid-5">
                    {
                        computerAndAccessories.map(products=>{
                            return(
                                <NavLink to={`/product/${products.id}`}className="product">
                            <div className="card" key={products.id}>
                                <img src={products.pic} alt="" />
                                <h3 className="product-name lead-text" >
                               {products.name}
                            </h3>
                            <div className="flex secondary-text">
                                <div className="desc">
                                    {products.desc}
                                </div>
                                <div className="quantity">
                                    {products.quantity}
                                </div>
                            </div>
                            <div className="product-content">
                                <p className="product-price">
                               {`$ ${products.price}`}
                                </p>
                                <div>
                                    <Link className='btn' to='/'>Add to Cart</Link>
                                </div>
                            </div>
                            </div>   
                        </NavLink>
                            )
                        })
                    } 
                </div>
                </div>
            </div>
        </div>
    )
}

const MapProductsToProps= (state)=>{
    return{
        computerAndAccessories: state.computerAndAccessories
    }
}
export default (connect(MapProductsToProps))(ProductsView)
