import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddIPMutation } from "../services/appApi";
import "./styles/Program.css";

function Program({ name, date, duration, location, details, _id }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [addIP] = useAddIPMutation();
  // console.log(user);
  const handleAddIP = () => {
    addIP({ user_id: user._id, ip_id: _id, access_token: user.token  });
  };
  return (
    <div className="program">
      <div className="cover"></div>
      <h1>{name}</h1>
      <h2>{date}</h2>
      <h2>{duration}</h2>
      <h2>{location}</h2>
      <h2>{details}</h2>
      {user &&
        (user.isAdmin ? (
          <button onClick={() => navigate(`/edit-program/${_id}`)}>
            Edit Program
          </button>
        ) : user.paid && !user.paid.includes(_id) ? (
          <button
            onClick={() => {
              handleAddIP();
            }}
          >
            Get your place
          </button>
        ) : (
          ""
        ))}
    </div>
  );
}

export default Program;
