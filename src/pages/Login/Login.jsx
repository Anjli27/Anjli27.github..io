import React from "react";
import "./Login.css";
import img from "../../assets/img.jpg"

function Login() {
  return (
    <div className="formContainer" style={
      { backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
  }}
    >
      <div className="formWrapper">
        <span className="logo">Chat Box</span>
        <span className="title">Login</span>
        <form>
       
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
