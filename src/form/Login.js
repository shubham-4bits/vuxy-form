import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';

const Login = () => {
  return (
    <div className="login">
      <div className="logo">🔥 logoo 🔥</div>
        {/* <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}

      <div className="login_page">
        <h1>Welcome to Vuexy ! 👏</h1>

        <p>Please sign-in to youre account andd 
            start the advanture</p>
       
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
           <p>Email</p>
            <input type="email" placeholder="admin@demo.com"/>
            <div className="forgot">
            <p>password</p>
            <NavLink to="/Forgot">
            <p>Forgot Password ?</p>
            </NavLink>

            </div>
            <input type="password" placeholder="*******"/>

        </div>
        <div className="remender">
        <p><input type="checkbox"/>Remember</p>

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
                <p>Create an account</p>
            </div>
        </NavLink>
        </div>

        <div className="hp">
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
  );
};

export default Login;
