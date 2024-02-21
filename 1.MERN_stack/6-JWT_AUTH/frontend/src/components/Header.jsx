import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import {Link} from "react-router-dom"

function Header() {
  return <div className="header" >
    <div className="logo">
      <Link to="/" >GoalSetter</Link>
    </div>
    <ul>
      <li>
        <Link to="/login" > 
        <FaSignInAlt />Login
        </Link>
      </li>
      <li>
        <Link to="/signup" > 
        <FaUser />Sign up
        </Link>
      </li>
    </ul>
  </div>;
}

export default Header;
