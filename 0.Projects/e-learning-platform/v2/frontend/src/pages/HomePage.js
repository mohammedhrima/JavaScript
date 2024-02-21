import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

import SlideShow from "../components/SliderShow";
import TeacherDetails from "../components/TeacherDetails";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import axios from "../axios";

function Home() {
  const user = useSelector((state) => state.user);
  const [idiom, setIdiom] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("/idioms").then(({ data }) => {
      // console.log(data[0]);

      setIdiom(data[Math.floor(Math.random() * data.length)].idiom);
      // console.log(idiom);
    });
  });

  return (
    <>
      <SlideShow />
      <button className="startBtn" onClick={() => navigate("/courses")}>
        {user && user.isAdmin ? <h3>See Courses</h3> : <h3>Start now</h3>}
      </button>
      <div className="idiom">
        <h2>Idiom of the day</h2>
        <br />
        <p>{idiom}</p>
        <button className="see_more_idiom" onClick={() => navigate("/idioms")}>
          <h2>See more</h2>
        </button>
      </div>
      <div className="about">
        <h2>About</h2>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <h3 className="h3">Teachers Details</h3>
      <div className="teachers">
        <TeacherDetails
          name={"Teacher 1"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an "
          }
        />
        <TeacherDetails
          name={"Teacher 2"}
          detail={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an "
          }
          image={""}
        />
      </div>
      <h3 className="h3">Companies worked with</h3>
      <Companies />
    </>
  );
}

export default Home;
