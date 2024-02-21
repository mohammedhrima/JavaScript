import React, { useState } from "react";
import "./Course.css";
import image from "../images/1.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Course({ fulltitle, description, _id, price }) {
  const [isHover, setIsHover] = useState(false);
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  const color = user && user.paid.includes(_id) ? "#1df2d8" : "";
  return (
    <div
      className="course"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ backgroundColor: color }}
    >
      {/*<img src={image} />*/}
      <div>
        <h3>{fulltitle}</h3>
        <h2>{description}</h2>
        <h1>Details</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
      </div>
      {user && user.isAdmin && (
        <button onClick={() => navigate(`/editcourse/${_id}`)}>
          <h2>Edit Course</h2>
        </button>
      )}
      {user &&
        !user.isAdmin &&
        (user.paid.includes(_id) ? (
          <button className="start_course">
            <h2 onClick={() => navigate(`/courses/${_id}`)}>Start Course</h2>
          </button>
        ) : (
          <button onClick={() => navigate(`/payment/${_id}`)}>
            <h2>Get Course now for {price} DH</h2>
          </button>
        ))}
    </div>
  );
}

export default Course;
