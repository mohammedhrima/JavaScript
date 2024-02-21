import React, { useState } from "react";
import "./styles/Account.css";
import Login from "./Login";
import Signup from "./Signup";

function Account() {
  const [close, setClose] = useState(false);
  const [log_sign, setLog_sign] = useState("log");

  return (
    <div className={`popup ${close && "none"}`}>
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setClose(true)}>
          <i className="fa-solid fa-xmark "></i>
        </button>
        <nav>
          <span
            className={`${log_sign === "log" && "visited log"}`}
            onClick={() => setLog_sign("log")}
          >
            Login
          </span>
          <span
            className={`${log_sign === "sign" && "visited sign"}`}
            onClick={() => setLog_sign("sign")}
          >
            Signup
          </span>
        </nav>
        {log_sign == "sign" && <Signup />}
        {log_sign == "log" && <Login />}
      </div>
    </div>
  );
}

export default Account;
