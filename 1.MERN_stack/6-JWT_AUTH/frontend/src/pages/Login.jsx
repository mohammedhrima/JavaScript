import { useState, useEffect } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password1: "",
  });
  const {name, email , password1, password2} = form;
  const handleChange = (e)=>{
    setForm((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }) )
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Log in
        </h1>
        <p>Log in to your account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <input type="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={handleChange} />
          </div>
          <div className="form-group">
          <input type="password" className="form-control" id="password" value={password1} placeholder="Enter your password" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block" >
              Log in
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
