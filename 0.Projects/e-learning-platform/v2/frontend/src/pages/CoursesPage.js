import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Course from "../components/Course";
import "./CoursesPage.css";
import axios from "../axios";

function Courses() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/courses")
      .then(({ data }) => {
        // console.log(data);
        setCourses(data);
      }, 5000)
      .catch((err) => console.log(err));
  });

  return (
    <div className="courses_container">
      {courses.map((course) => (
        <Course
          fulltitle={`${course.fulltitle}`}
          description={`${course.description}`}
          _id={`${course._id}`}
          price={`${course.price}`}
        />
      ))}
      {user && user.isAdmin && (
        <button
          onClick={() => navigate("/new-course")}
          className="addnewcourse"
        >
          <h2>+ Add New Course</h2>
        </button>
      )}
    </div>
  );
}

export default Courses;
