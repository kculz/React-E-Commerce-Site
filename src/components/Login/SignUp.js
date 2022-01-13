import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class SignUp extends Component {
    render() {
        return (
            <div>
               <div className="grid-form">
                <div className=''>
                   <form action="" autoComplete='off'>
                        <div className="form-grid">
                            <input type="text" name="firstname" id="" placeholder='Enter Firstname' autoComplete='off' />
                            <input type="text" name="lastname" id="" placeholder='Enter Lastname' autoComplete='off'/>
                            <input type="email" name="email" id="" placeholder='Enter E-mail' autoComplete='off' />
                            <input type="number" name="phone" id="" placeholder='Enter Phone Number' autoComplete='off'/>
                           
                            <input type="text" name="username" id="" placeholder='Enter Username' autoComplete='off'/>
                            <input type="password" name="password" id="" placeholder='Enter Password' autoComplete='off' />
                            <input type="text" name="address" id="" placeholder='Enter Address' autoComplete='off' />
                            <select name="contries" id="" placeholder='Countries'>
                                
                                <option value="Zim">Countries</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                            </select>
                            <input type="text" name="state" id="" placeholder='Enter State/Province' autoComplete='off'/>
                            
                           
                            <select name="cities" id="">
                                Cities
                                <option value="Zim">Cities</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                                <option value="Zim">Zim</option>
                            </select>
                            <input type="radio" name="male" id=""/>
                            
                            <input type="radio" name="female" id=""/>
                            <label htmlFor="male">Male</label>
                            <label htmlFor="female">Female</label>
                            
                        </div>
                        <div className="">
                               <div>
                               <NavLink to="/login" className="btn">Register for E-Shopping</NavLink>
                               </div>
                                <p className="lead-text">Register  as <NavLink to='/login' className='Link'> Seller</NavLink> instead?</p>
                            </div>
                            
                    </form>
                   </div>
                </div> 
            </div>
        )
    }
}

export default SignUp
