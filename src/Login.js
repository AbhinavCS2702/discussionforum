import React from "react";
import "./login.css";
function Login() {
  return (
    <div>
      <div class="container">
        <div class="left">
          <div id="heading" align="left">
            <h2 id="main_name">Vasavi Connect</h2>
            <p>A place to meet like minded peers...</p>
          </div>
          <div id="greeting" align="left">
            <p>Welcome back! Please login to your account</p>
          </div>
          <div>
            <h5 id="login" align="left">
              Login
            </h5>
            <div>
              <div id="email_field" class="credentials">
                <label>Email Address</label>
                <input placeholder="enter email address" type="email" />
              </div>
              <div id="email_field" class="credentials">
                <label>Password</label>
                <input placeholder="enter password" type="password" />
              </div>
              <div>
                <p>
                  <a href="#">Forgot Password?</a>
                </p>
              </div>
            </div>
          </div>
          <div class="buttons">
            <div id="Login">
              <button>Login</button>
            </div>
            <div id="Sign Up">
              <button>Sign Up</button>
            </div>
          </div>
        </div>

        <div id="not_gay" align="center"></div>
        <div class="right">
          <div class="navigation">
            <h3 id="home_nav">
              <a href="www.google.com">Home</a>
            </h3>
            <h3 id="About_nav">
              <a href="">About us</a>
            </h3>
            <h3 id="our_college">
              <a href="">Our College</a>
            </h3>
          </div>
          <div class="image">
            <img src="https://vce.ac.in/img/vlogo.gif" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
