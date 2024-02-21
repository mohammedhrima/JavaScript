import React, { useEffect, useState } from "react";
import "./PlaylistPage.css";
import VideoPlayer from "../components/VideoPlayer.js";
import { useParams } from "react-router-dom";
import axios from "../axios.js";

function PlaylistPage() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    axios.get(`courses/${id}/videos`).then(({ data }) => {
      //console.log(data);
      setDescription(data.description);
      setVideos(data.videos);
      console.log(videos);
    });
  }, [id]);
  //console.log(videoRef);
  return (
    <div className="Playlist_container">
      <div className="details">
        <h2>Description</h2>
        <p>{description}</p>
      </div>
      <div className="course_container">
        <div
          className="cover"
          style={{
            display: videoLink != "" && "none",
          }}
        ></div>
        <div
          style={{
            display: videoLink == "" && "none",
          }}
        >
          <VideoPlayer video_src={videoLink} />
        </div>

        <div className="btns">
          {videos &&
            videos.map((video) => (
              <button
                onClick={() => {
                  setVideoLink(video.link);
                }}
              >
                <h1>{video.title}</h1>
              </button>
            ))}
        </div>
      </div>
      <button className="Certif">
        <h2> Get your Certaficate</h2>
      </button>
      {/* <p>you can't get your certaficate till you finish the course</p>*/}
    </div>
  );
}

export default PlaylistPage;
