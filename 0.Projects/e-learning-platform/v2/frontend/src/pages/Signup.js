import React, { useState } from "react";
import "./Signup.css";
import image from "../images/image_LOGO.png";
import { useSignupMutation } from "../services/appApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Signup() {
  const user = useSelector((state) => state.user);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signup, { error, isLoading, isSucces, isError }] = useSignupMutation();
  const navigate = useNavigate();

  function handleSignup(event) {
    event.preventDefault();
    signup({ firstname, lastname, email, password });
  }
  return (
    <form className="signup_container" onSubmit={handleSignup}>
      <div className="create_account">
        <h3>Create account</h3>
        {isError && <h2 className="alert">{error.data}</h2>}
        {isSucces && <h2 className="alert">{error.data}</h2>}
        <h2>First name</h2>
        <input
          type="text"
          placeholder="Enter your first name"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <h2>Last name</h2>
        <input
          type="text"
          placeholder="Enter your last name"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <h2>Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Password</h2>
        <input type="password" placeholder="Enter your password" required />
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password again"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {" "}
          <h2>Sign up</h2>
        </button>
        <p>
          Already have an account ? <a href="/login">Log in</a>
        </p>
      </div>
      <div>
        <img src={image} className="signup_image" />
      </div>
    </form>
  );
}

export default Signup;
