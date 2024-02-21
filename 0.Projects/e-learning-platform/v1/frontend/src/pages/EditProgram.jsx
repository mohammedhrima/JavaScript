import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import {
  useCreateIPMutation,
  useDelteIPMutation,
  useUpdateIPMutation,
} from "../services/appApi";
import "./styles/EditProgram.css";
import axios from "../axios";
import { useSelector } from "react-redux";

function EditProgram() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [detail, setDetail] = useState("");

  const navigate = useNavigate();
  const [updateIP, { error, isError, isLoading, isSuccess }] =
    useUpdateIPMutation();

  const [deleteIP, { error1, isError1, isLoading1, isSuccess1 }] =
    useDelteIPMutation();

  useEffect(() => {
    if (id) {
      console.log("id is ", id);
      axios.get(`/ip/${id}`).then(({ data }) => {
        console.log("received data ", data);
        setName(data.name);
        setStartDate(data.startDate);
        setDuration(data.duration);
        setLocation(data.location);
        setDetail(data.detail);
        //console.log(data);
      });
    }
  }); //array to call one time

  const handleDeleteIP = () => {
    deleteIP({ id, access_token: user.token }).then(({ data }) => {
      if (data.msg === "done") {
        setTimeout(() => {
          navigate("/international-programs");
        }, 1000);
      }
    });
  };

  const handleUpdateIP = () => {
    updateIP({ name, startDate, duration, location, detail, access_token: user.token  }).then(
      ({ data }) => {
        if (data.msg === "done") {
          setTimeout(() => {
            navigate("/international-programs");
          }, 1000);
        }
      }
    );
  };

  return (
    <div className="editprogram">
      <Header />
      <h1>Edit page</h1>
      {isError && (
        <h2
          className={
            error.data === "Program updated succefully" ? `success` : `error`
          }
        >
          {error.data}
        </h2>
      )}
      <div className="data">
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
        <button className="save" type="button" onClick={() => handleUpdateIP()}>
          Save
        </button>
        <button
          className="delete"
          type="button"
          onClick={() => handleDeleteIP()}
        >
          Delete Program
        </button>
      </div>
    </div>
  );
}

export default EditProgram;
