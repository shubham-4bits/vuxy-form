import React from 'react';
import { NavLink } from "react-router-dom";


const Forgot = () => {
    return (
        <div>
            <h1>forgot</h1>
            <div className="login">
      <div className="logo">🔥 logoo 🔥</div>

      <div className="login_page">
        <h1>Forgot Password? 🔒</h1>
        <p className="pp">Enter your email and we'll send you instructions to reset your password</p>

        <div className="Email">
           <p>Email</p>
            <input type="email" placeholder="admin@demo.com"/>
            <div className="forgot">
         
            </div>
           <br/>

        </div>
       

        <NavLink to="/Home">
        <div className="sign-in">
            <button type="submit" className="btn">Sign in</button>
        </div>
        </NavLink>


        <div className="create">
            <p>New on our platform ? </p>
        <NavLink to="/Registration">
            <div className="ac">
                <p> Back to login</p>
            </div>
        </NavLink>
        </div>



      </div>
    </div>
        </div>
    )
}

export default Forgot
