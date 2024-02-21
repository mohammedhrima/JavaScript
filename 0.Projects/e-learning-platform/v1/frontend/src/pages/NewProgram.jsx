import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useCreateIPMutation } from "../services/appApi";
import "./styles/NewProgram.css";

function NewProgram() {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [detail, setDetail] = useState("");
  const [error1, setError1] = useState("");
  const navigate = useNavigate();
  const [
    createIP,
    { error, isError, isLoading, isSuccess }
  ] = useCreateIPMutation();
  const handleCreateIP = () => {
    if (
      name !== "" &&
      startDate !== "" &&
      duration !== "" &&
      location !== "" &&
      detail !== ""
    ) {
      createIP({
        name,
        startDate,
        duration,
        location,
        detail,
        access_token: user.token 
      }).then(({ data }) => {
        if( error && error.data === "Program created succefully")
        {
          console.log("naviage to international programs");
          setTimeout(()=>{
            navigate("/international-programs");
          },1000)
        }
        console.log(data);
      });
    } else {
      setError1("Verify if all fields are full");
    }
  };
  return (
    <div className="newprogram">
      <Header />
      <div className="data">
        {isError && (
          <h2
            className={
              error.data === "Program created succefully" ? `success` : `error`
            }
          >
            {error.data}
          </h2>
        )}
        {error1 !== "" && <h2 className="error">{error1}</h2>}
        <div>
          <h2>Program's name:</h2>
          <input
            type={"text"}
            defaultValue={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <h2>Start date:</h2>
          <input
            type={"date"}
            defaultValue={startDate}
            required
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <h2>Duration:</h2>
          <input
            type={"text"}
            defaultValue={duration}
            required
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <h2>Location:</h2>
          <input
            type={"text"}
            defaultValue={location}
            required
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <h2>Detail:</h2>
          <textarea
            defaultValue={detail}
            required
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
      </div>
      <div className="btns">
        <button
          className="save"
          type="button"
          onClick={(e) => handleCreateIP()}
        >
          Save
        </button>
       {/* <button className="delete">Delete Program</button>*/}
      </div>
    </div>
  );
}

export default NewProgram;
