import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Program from "../components/Program";
import "./styles/InternationalPrograms.css";
import Background from "../assets/Background.jpg";
import Account from "../components/Account";
import { useSelector } from "react-redux";
import axios from "axios";

function InternationalPrograms() {
  const user = useSelector((state) => state.user);
  const [IPlist, setIPlist] = useState([]);
  // console.log(user);
  useEffect(() => {
    console.log("send get all IP");

    axios
      .get("/ip")
      .then(({ data }) => {
        console.log(data);
        setIPlist(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  return (
    <div className="I-P">
      {!user && <Account />}
      <Header />
      <img src={Background} className="bg" alt="img"></img>
      <div className="programs">
        {!IPlist.length && (
          <div></div>
        )

        }
        {IPlist.length
          ? IPlist.map((ip) => (
              <Program
                name={ip.name}
                date={ip.startDate}
                duration={ip.duration}
                location={ip.location}
                details={ip.duration}
                _id={ip._id}
              />
            ))
          : ""}
      </div>
      {user && user.isAdmin && (
        <button
          className="addprogrambtn"
          onClick={() => navigate("/new-program")}
        >
          Add Program
        </button>
      )}
    </div>
  );
}

export default InternationalPrograms;
