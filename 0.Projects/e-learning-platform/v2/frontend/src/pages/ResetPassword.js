import React from "react";
import "./ResetPassword.css";
import image from "../images/image_LOGO.png";

function ResetPassword() {
  return (
    <div className="reset_container">
      <div className="reset">
        <h3>Reset Password</h3>
        <h2>Enter your Email</h2>
        <input type="email" placeholder="Enter your email" />
        <button>
          {" "}
          <h2>Send reset Link</h2>
        </button>
      </div>
      <div>
        <img src={image} className="reset_image" />
      </div>
    </div>
  );
}

export default ResetPassword;
