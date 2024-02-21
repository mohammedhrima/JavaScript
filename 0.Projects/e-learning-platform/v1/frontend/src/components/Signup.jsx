import React, { useState } from "react";
import "./styles/Signup.css";
import { useSignupMutation } from "../services/appApi";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email1, setEmail1] = useState("");
  const [email, setEmail2] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password, setPassword2] = useState("");
  const [signup, { error, isError, isLoading, isSuccess }] =
    useSignupMutation();
  const [error1, setError1] = useState("");

  const handleSignup = () => {
    setError1("");
    if (
      firstname !== "" &&
      lastname !== "" &&
      email1 !== "" &&
      email !== "" &&
      speciality !== "" &&
      address !== "" &&
      city !== "" &&
      phone !== "" &&
      password1 !== "" &&
      password !== ""
    ) {
      if (email1 !== email) {
        setError1("verify Email");
      } else if (password1 !== password) {
        setError1("verify password");
      } else {
        signup({
          firstname,
          lastname,
          email,
          phone,
          speciality,
          address,
          city,
          password,
        });
      }
    } else {
      setError1("Verify if all fields are full");
    }
  };
  /* if (isError) {
    console.log(error);
  }*/
  return (
    <div className="signup_container">
      {isError && <h2 className="error">{error.data}</h2>}
      {error1 != "" && <h2 className="error">{error1}</h2>}
      <div>
        <h2>First name</h2>
        <h2>Last name</h2>
      </div>
      <div>
        <input
          type={"text"}
          placeholder={"First name"}
          onChange={(e) => setFirstname(e.target.value)}
          defaultValue={firstname}
          required
        />
        <input
          type={"text"}
          placeholder={"Last name"}
          onChange={(e) => setLastname(e.target.value)}
          defaultValue={lastname}
          required
        />
      </div>

      <div>
        <h2>Email</h2>
        <h2>Email</h2>
      </div>

      <div>
        <input
          type={"email"}
          required
          placeholder={"example@gmail.com"}
          onChange={(e) => setEmail1(e.target.value)}
          defaultValue={email1}
        />
        <input
          type={"email"}
          required
          placeholder={"example@gmail.com"}
          onChange={(e) => setEmail2(e.target.value)}
          defaultValue={email}
        />
      </div>

      <div>
        <h2>Address</h2>
        <h2>City</h2>
      </div>

      <div>
        <input
          type={"text"}
          required
          onChange={(e) => setAddress(e.target.value)}
          defaultValue={address}
        />
        <input
          type={"text"}
          required
          onChange={(e) => setCity(e.target.value)}
          defaultValue={city}
        />
      </div>

      <div>
        <h2>Speciality</h2>
        <h2>Phone number</h2>
      </div>

      <div>
        <input
          type={"text"}
          required
          onChange={(e) => setSpeciality(e.target.value)}
          defaultValue={speciality}
        />
        <input
          type={"tel"}
          required
          placeholder={"+212XXXXXXXXX"}
          onChange={(e) => setPhone(e.target.value)}
          defaultValue={phone}
        />
      </div>

      <div>
        <h2>Password</h2>
        <h2>Password</h2>
      </div>

      <div>
        <input
          type={"password"}
          required
          placeholder="Password"
          onChange={(e) => setPassword1(e.target.value)}
          defaultValue={password1}
        />
        <input
          type={"password"}
          required
          placeholder="Password"
          onChange={(e) => setPassword2(e.target.value)}
          defaultValue={password}
        />
      </div>

      <button type="button" onClick={handleSignup}>
        Sign up
      </button>
    </div>
  );
}

export default Signup;
