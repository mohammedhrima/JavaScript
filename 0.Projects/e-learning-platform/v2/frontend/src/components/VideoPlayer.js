import React from "react";
import "./VideoPlayer.css";
import { useRef, useState } from "react";

function VideoPlayer({ video_src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [the_style, setThe_style] = useState("fa-solid fa-play");

  const move = (index) => {
    videoRef.current.currentTime += index;
  };
  const videoHandler = () => {
    if (!playing) {
      videoRef.current.play();
      setPlaying(true);
      setThe_style("fa-solid fa-pause");
      var vid = document.getElementById("myvideo");
      setVideoTime(vid.duration);
    } else if (playing) {
      videoRef.current.pause();
      setThe_style("fa-solid fa-play");
      setPlaying(false);
    }
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <div className="player">
      <video id="myvideo" ref={videoRef} src={video_src}></video>

      <div className="controllers">
        <button
          className="fa-solid fa-angle-left"
          onClick={() => move(-5)}
        ></button>

        <button className={the_style} onClick={() => videoHandler()}></button>

        <button
          className="fa-solid fa-angle-right"
          onClick={() => move(5)}
        ></button>
        <div className="timecontroller">
          <div className="timebar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
