import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="user name" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error</p>
        <span>
          don't have an account? <Link to="/Register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
