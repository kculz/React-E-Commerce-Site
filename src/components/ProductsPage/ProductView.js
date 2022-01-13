import React from 'react'
import { connect } from 'react-redux'


const ProductView = (props) => {
    const {pic, name, desc, quantity, price} = props.product
    return (
        <div>
            <div className="card">
                <div className="grid">
                    <div className="col">
                        {pic}
                    </div>
                    <div className="col">
                        <h1>
                            {name}
                        </h1>
                        <p>
                            {desc}
                        </p>
                        <p className="lead-text">
                            Quantity: {quantity}
                        </p>
                        <p className="Link">
                            {price}
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}
const mapStateToProps = (state,ownProps) =>{
    // console.log(state)
    console.log(ownProps)
    let item = ownProps.match.params.id;
    return{
        product: state.computerAndAccessories.find((product) => product.item === item)
    }
}
export default connect(mapStateToProps)(ProductView)
