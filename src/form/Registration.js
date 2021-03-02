import React from 'react';
import "./Login.css"
import { NavLink } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';



const Registration = () => {
    return (
        <div className="login">
        <div className="logo">🔥 logoo 🔥</div>
  
        <div className="login_page">
          <h1>Welcome to Vuexy ! 🚀</h1>
  
          <p>Please sign-in to youre account andd start the advanture</p>
         
          <div className="admin_id">
            <div className="name">
              <p>Admin: admin@demo.com | admin</p>
              <p>Client:client@demon.com |client</p>
            </div>
            <div className="que">
              <p>❓</p>
            </div>
          </div>
  
          <div className="Email">
             <p>Username</p>
              <input type="email" placeholder="Enter ur name"/>
             <p>Email</p>
              <input type="email" placeholder="admin@demo.com"/>
              <p>password</p>
              <input type="password" placeholder="************"/>
  
          </div>
          <div className="remenber">
              
              <p><input type="checkbox"/>Remember</p>
          </div>

          <NavLink to="/Home">
           <div className="sign-in">
              <button type="submit" className="btn">Sign up</button>
          </div>
          </NavLink>
  
  
  
          <div className="create">
              <p>Already have an account ? </p>
          <NavLink to="/">
              <div className="ac">
                  <p>Sign in instead</p>
              </div>
          </NavLink>
          </div>
  
          <div className="hr">
               <p>OR</p>
    
            
              
          </div>
  
  
          <div className="bottom_icon">
            <FacebookIcon/>
            <TwitterIcon/>
            <MailOutlineIcon/>
            <GitHubIcon/>
            
            
            
           
        </div>
  
  
        </div>
      </div>
    )
}

export default Registration;
