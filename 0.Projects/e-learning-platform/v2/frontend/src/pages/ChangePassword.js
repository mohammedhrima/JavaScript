import React from "react";
import "./ChangePassword.css";
import image from "../images/image_LOGO.png";

function ChangePassword() {
  return (
    <div className="changepassword_container">
      <div className="change_password">
        <h3>Change password</h3>
        <h2>New password</h2>
        <input type="password" placeholder="Enter your new password" />
        <h2>New password</h2>
        <input type="password" placeholder="Enter your new password" />
        <button>
          {" "}
          <h2>save</h2>
        </button>
      </div>
      <div>
        <img src={image} className="changepassword_image" />
      </div>
    </div>
  );
}

export default ChangePassword;
