import React, { useState, useRef } from "react";
import "./IT.css";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";

function IT() {
  const user = useSelector((state) => state.user);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1qefcrx",
        "template_huwyomg",
        form.current,
        "NOTdy0rrxb3LKPSrE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="IT_container" ref={form} onSubmit={sendEmail}>
      <h3>
        Write your problem and send it, once it will be fixed we will contact
        you
      </h3>
      <h2>Your full name</h2>
      <input
        type={"text"}
        name={"user_name"}
        value={`${user.firstname} ${user.lastname}`}
      />
      <h2>Your Email</h2>
      <input type={"email"} name={"user_email"} value={user.email} />
      <textarea placeholder="Write here..." name={"message"}></textarea>

      <button className="send">
        <h2>SEND</h2>
      </button>
    </form>
  );
}

export default IT;
