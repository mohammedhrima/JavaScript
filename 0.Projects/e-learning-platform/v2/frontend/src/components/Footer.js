import React from "react";
import "./Footer.css";
import LOGO from "../images/LOGO.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div>
        <img src={LOGO} />
        <h2 style={{ textAlign: "center" }}>Copyright</h2>
      </div>
      <div>
        <span>
          <i className="fa-brands fa-whatsapp"></i>
          <h2>06xxxxxxxxxx</h2>
        </span>
        <span>
          <i className="fa-brands fa-linkedin"></i>
          <h2>SOCIAL MEDIA 2</h2>
        </span>
        <span>
          <i className="fa-solid fa-envelope"></i>
          <h2>SOCIAL MEDIA 3</h2>
        </span>
        <span>
          <i className="fa-brands fa-facebook"></i>
          <h2>SOCIAL MEDIA 4</h2>
        </span>
      </div>
      <div>
        <span>
          <h2>Address</h2>
        </span>
        <span>
          <button className="IT" onClick={() => navigate("found-problem")}>
            <h3>Found a Problem</h3>
          </button>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
