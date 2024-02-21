import React, { useState } from "react";
import "./NewCourse.css";
import { useCreateCourseMutation } from "../services/appApi";
//import VideoContainer from "../components/VideoContainer";
//import VideoPlayer from "../components/VideoPlayer";

function NewCourse() {
  const [fulltitle, setFulltitle] = useState("");
  const [description, setDescription] = useState("");
  const [videos, setVideos] = useState([]);
  const [price, setPrice] = useState(0);
  const [createCourse, { isError, error, isLoading, isSuccess }] =
    useCreateCourseMutation();

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

  /* setTimeout(() => {
    // navigate("/");
    console.log(videos);
  }, 10000);*/
  function handleSubmit(event) {
    console.log("in submit");
    event.preventDefault();
    if (!fulltitle || !description || !videos.length || !price) {
      return alert("Please fill out all fields");
    }
    createCourse({ fulltitle, description, videos, price }).then(({ data }) => {
      console.log(data);
    });
  }

  return (
    <form className="createcourses_container" onSubmit={handleSubmit}>
      {isError && <h2 className="alert">{error.data}</h2>}
      {isSuccess && <h2 className="alert">success</h2>}
      <h2>Full Course Title</h2>
      <input
        type={"text"}
        onChange={(e) => setFulltitle(e.target.value)}
        required
      />
      <h2>Description</h2>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder={"Write description here .."}
        required
      />
      {videos.map((elem) => {
        return (
          <div className="uploadvideo_container">
            <video src={elem.link} />
            <div className="course_data">
              <h2>Title</h2>
              <input
                type={"text"}
                onChange={(e) => (elem.title = e.target.value)}
                placeholder={"Type title of course here... "}
                required
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
        onChange={(e) => setPrice(e.target.value)}
        placeholder={"Type price here..."}
        required
      />
      DH
      <button type="submit" disabled={isLoading || isSuccess}>
        <h2>Save</h2>
      </button>
    </form>
  );
}

export default NewCourse;
