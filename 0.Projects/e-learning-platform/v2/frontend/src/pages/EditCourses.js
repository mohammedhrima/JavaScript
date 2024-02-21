import React, { useEffect, useState } from "react";
import "./EditCourses.css";
import VideoContainer from "../components/VideoContainer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import { useUpdateCourseMutation } from "../services/appApi";

function EditCourses() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [fulltitle, setFulltitle] = useState("");
  const [description, setDescription] = useState("");
  const [videos, setVideos] = useState([]);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  // console.log(id);
  const [updateCourse, { isError, error, isLoading, isSuccess }] =
    useUpdateCourseMutation();

  useEffect(() => {
    axios.get(`courses/${id}`).then(({ data }) => {
      setCourse(data);
      setDescription(data.description);
      setFulltitle(data.fulltitle);
      setPrice(data.price);
      setVideos(data.videos);
    });
  }, []);

  function showWidget() {
    // event.preventDefault();

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "hrimadev",
        uploadPreset: "jcqelhzz",
      },
      (err, res) => {
        if (!err && res.event === "success") {
          //set image to old array + new array;
          setVideos((prev) => [
            ...videos,
            { link: res.info.url, public_id: res.info.public_id, title: "" },
          ]);
        }
      }
    );
    widget.open();
  }
  function handleSubmit(event) {
    console.log("in submit");
    event.preventDefault();
    if (!fulltitle || !description || !videos.length || !price) {
      return alert("Please fill out all fields");
    }
    updateCourse({ fulltitle, description, videos, price, id })
      .then((data) => {
        console.log(data);
        navigate("/courses");
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className="createcourses_container" onSubmit={handleSubmit}>
      <h2>Full Course Title</h2>
      <input
        type={"text"}
        onChange={(e) => setFulltitle(e.target.value)}
        value={fulltitle}
        required
      />
      <h2>Description</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      {videos.map((elem) => {
        return (
          <div className="uploadvideo_container">
            <video src={elem.link} />
            <div className="course_data">
              <h2>Title : {elem.title}</h2>

              <input
                type={"text"}
                onChange={(e) => (elem.title = e.target.value)}
                required={!elem.title.length && true}
              />
            </div>
          </div>
        );
      })}
      <button onClick={showWidget} type="button">
        <h2>Add video</h2>
      </button>
      <h2>Price</h2>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      DH
      <button type="submit">
        <h2>Save</h2>
      </button>
    </form>
  );
}

export default EditCourses;
