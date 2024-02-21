import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
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
          <FaUser /> Sign up
        </h1>
        <p>Plese Create an account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <input type="text" className="form-control" id="name" value={name} placeholder="Enter your name" onChange={handleChange} />
          </div>
          <div className="form-group">
          <input type="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={handleChange} />
          </div>
          <div className="form-group">
          <input type="password" className="form-control" id="password" value={password1} placeholder="Enter your password" onChange={handleChange} />
          </div>
          <div className="form-group">
          <input type="password" className="form-control" id="name" value={password2} placeholder="Confirm password" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block" >
              Sign up
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
