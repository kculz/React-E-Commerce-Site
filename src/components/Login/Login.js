import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Login extends Component {
  state={
      Seller:'',
      Shopper:''
  }
   handleSeller= (event)=>{
        this.setState({
           
        })
   }
   handleShopper= (event)=>{
    this.setState({
       
    })
}
    render() {
        return (
            <div>
                <div className="form">
                <div className=''>
                   <form action="" autoComplete='off'>
                        <div className="form-col">
                            <input type="text" name="username" id="" placeholder='Enter Username' autoComplete='off' value={this.state.value} />
                            <input type="email" name="email" id="" placeholder='Enter E-mail' autoComplete='off' value={this.state.value}/>
                            <input type="password" name="password" id="" placeholder='Enter Password' autoComplete='off' value={this.state.value}/>
                            <div className="">
                               <div>
                               <button className="btn" onClick={this.handleShopper}>Start Shopping</button>
                               </div>
                                
                                <p className="lead-text">Login as <button  onClick={this.handleSeller}> Seller</button> instead?</p>
                                
                                
                                
                                
                            </div>
                            <div className="flex">
                                <NavLink to='/forgotpassword' className="Link">Forgot password?</NavLink>
                            </div>
                        </div>
                    </form>
                   </div>
                </div>
            </div>
        )
    }
}

export default Login
