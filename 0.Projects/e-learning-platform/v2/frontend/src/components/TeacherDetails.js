import React, { useState } from "react";
import "./TeacherDetails.css";
import image from "../images/user.png";

function TeacherDetails({ name, detail }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseIn = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };

  let myStyle = {
    display: isHover ? "none" : "",
  };
  return (
    <>
      <div
        className="teacher_detail"
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        style={{
          background: isHover && "#E6F5FE",
        }}
      >
        <img src={image} style={myStyle} />
        <h2 style={myStyle}>{name}</h2>
        <h3 style={{ display: isHover ? "block" : "none" }}>See more...</h3>
        <p style={myStyle}>{detail}</p>
      </div>
    </>
  );
}

export default TeacherDetails;
