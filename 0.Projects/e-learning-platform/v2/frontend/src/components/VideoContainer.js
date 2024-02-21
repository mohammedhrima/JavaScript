import React from "react";
import "./VideoContainer.css";

function VideoContainer() {
  return (
    <div className="uploadvideo_container">
      <span></span>
      <div className="uploadvideo">
        <h1>Upload video</h1>
      </div>
      <div className="course_data">
        <h2>Title</h2>
        <input type={"text"} />
      </div>
    </div>
  );
}

export default VideoContainer;
