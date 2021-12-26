import React from "react";
import "./testing.css";
function Testing() {
  return (
      <div>

          <div id="back">
            <div class="backRight"></div>
            <div class="backLeft"></div>
          </div>

          <div id="slideBox">
            <div class="topLayer">
            <div class="left">
      <div class="content">
        <h2>Sign Up</h2>
        <form method="post" onsubmit="return false;">
          <div class="form-group">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <input type="text" placeholder="Phone Number"/>
          </div>
          <div class="form-group"></div>
          <div class="form-group"></div>
          <div class="form-group"></div>
        </form>
        <button id="goLeft" class="off">Login</button>
        <button>Sign up</button>
      </div>
    </div>
    <div class="right">
        
        
      <div class="content">
        <h2>Login</h2>
        <form method="post" onsubmit="return false;">
          <div class="form-group">
            <label for="username" class="form-label">Username</label>
            <input type="text" />
            <label for="password" class="form-label">Password</label>
            <input type="text" />
          </div>
          <button id="goRight" class="off">Sign Up</button>
          <button id="login" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>


    </div>
  
  );
}
export default Testing;