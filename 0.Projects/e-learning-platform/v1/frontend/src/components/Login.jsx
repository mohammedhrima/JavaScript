import React, { useState } from "react";
import { useLoginMutation } from "../services/appApi";
import "./styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error, isError, isLoading, isSuccess }] = useLoginMutation();
  const [error1, setError1] = useState("");

  const handleLogin = () => {
    setError1("");
    if (email !== "" && password != "") {
      login({
        email,
        password,
      }).then(({data})=> {
        console.log(data);
      })
    } else {
      setError1("Verify if all fields are full");
    }
  };

  return (
    <div className="login_container">
      {isError && <h2 className="error">{error.data}</h2>}
      {error1 != "" && <h2 className="error">{error1}</h2>}
      <h2>Email</h2>
      <input
        type={"email"}
        defaultValue={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <h2>Password</h2>
      <input
        type={"password"}
        defaultValue={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type={"button"} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
