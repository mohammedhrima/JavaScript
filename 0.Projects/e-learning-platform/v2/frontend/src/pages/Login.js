import React, { useState } from "react";
import "./Login.css";
import image from "../images/image_LOGO.png";
import { useLoginMutation } from "../services/appApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { error, isError, isSuccess, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    login({ email, password });
  }

  return (
    <form className="login_container" onSubmit={handleLogin}>
      <div className="log_to_account">
        <h3>Login to account</h3>
        {isError && <h2 className="alert">{error.data}</h2>}
        <h2>Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {" "}
          <h2>Log in</h2>
        </button>
        <p>
          Forget the password ? <a href="/resetpassword">Reset password</a>
        </p>
        <p>
          Don't have an account ? <a href="/signup">Sign up</a>
        </p>
      </div>
      <div>
        <img src={image} className="login_image" />
      </div>
    </form>
  );
}

export default Login;
