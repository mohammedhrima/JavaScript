import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useUpdateUserMutation } from "../services/appApi";
import "./styles/EditInfo.css";

function EditInfo() {
  const user = useSelector((state) => state.user);
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
  const [updateUser] = useUpdateUserMutation();
  const [error1, setError1] = useState("");
  const navigate = useNavigate();

  //console.log(user);
  const handleEdit = () => {
    if (email !== email1) {
      setError1("verify Emails");
    } else if (password !== password1) {
      setError1("verify passwords");
    } else {
      updateUser({
        id: user._id,
        firstname,
        lastname,
        email,
        speciality,
        address,
        city,
        phone,
        password,
        access_token: user.token 
      }).then((data) => {
        console.log(data);
        /*if (data) {
          navigate("/");
        }*/
      });
    }
  };

  return (
    <div className="editinfo">
      <Header />
      <div className="container1">
        <div className="container2">
          <h2>First name</h2>
          <input
            type={"text"}
            defaultValue={user.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="container2">
          <h2>Last name</h2>
          <input
            type={"text"}
            defaultValue={user.lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
      </div>
      <div className="container1">
        <div className="container2">
          <h2>Email</h2>
          <input
            type={"text"}
            defaultValue={user.email}
            onChange={(e) => setEmail1(e.target.value)}
          />
        </div>
        <div className="container2">
          <h2>Email</h2>
          <input
            type={"text"}
            defaultValue={user.email}
            onChange={(e) => setEmail2(e.target.value)}
          />
        </div>
      </div>
      <div className="container1">
        <div className="container2">
          <h2>Address</h2>
          <input
            type={"text"}
            defaultValue={user.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="container2">
          <h2>City</h2>
          <input
            type={"text"}
            defaultValue={user.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <div className="container1">
        <div className="container2">
          <h2>Speciality</h2>
          <input
            type={"text"}
            defaultValue={user.speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          />
        </div>
        <div className="container2">
          <h2>Phone number</h2>
          <input
            type={"text"}
            defaultValue={user.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="container1">
        <div className="container2">
          <h2>Password</h2>
          <input type={"text"} onChange={(e) => setPassword1(e.target.value)} />
        </div>
        <div className="container2">
          <h2>Password</h2>
          <input type={"text"} onChange={(e) => setPassword2(e.target.value)} />
        </div>
      </div>
      <button className="success" type="button" onClick={handleEdit}>
        Save
      </button>
    </div>
  );
}

export default EditInfo;
