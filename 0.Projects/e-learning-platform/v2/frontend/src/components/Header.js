import React, { useState } from "react";
import "./Header.css";
import image from "../images/logo_header.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";

function Header() {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [var_, setVar_] = useState("topnav responsive");
  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className={var_} id="myTopnav">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a
        href="javascript:void(0);"
        class="icon"
        onclick={() => {
          var_ === "topnav" ? setVar_("topnav responsive") : setVar_("topnav");
        }}
      >
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}

/*
 <>
      <ul>
        <li onClick={() => navigate("/")}>
          <img src={image} className="headerLogo" />
        </li>

        <div style={{ float: "right" }}>
          {user && (
            <>
              <li onClick={() => navigate("/")}>
                <a>
                  <h2>{user.email}</h2>
                </a>
              </li>
              {user.isAdmin && (
                <>
                  <li onClick={() => navigate("/dashboard")}>
                    <a>
                      <h2>DashBoard</h2>
                    </a>
                  </li>
                </>
              )}
              <li onClick={() => handleLogout()}>
                <a>
                  <h2>Logout</h2>
                </a>
              </li>
            </>
          )}
          {!user && (
            <>
              <li onClick={() => navigate("/login")}>
                <a>
                  <h2>Login</h2>
                </a>
              </li>
              <li onClick={() => navigate("/signup")}>
                <a>
                  <h2>Sign up</h2>
                </a>
              </li>
            </>
          )}
        </div>
      </ul>
    </>
*/
export default Header;
