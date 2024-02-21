import React, { useEffect, useState } from "react";
import "./SliderShow.css";
import image1 from "../images/001.png";
import image2 from "../images/002.png";
import image3 from "../images/003.png";
import image4 from "../images/004.png";
import image5 from "../images/005.png";
import image6 from "../images/006.png";

function SlideShow() {
  let [index, setIndex] = useState(0);
  let [imageArr, setImageArr] = useState(() => {
    if (window.innerWidth < 1024) {
      return [image4, image5, image6];
    } else {
      return [image1, image2, image3];
    }
  });

  React.useEffect(() => {
    if (window.innerWidth < 1024) {
      setImageArr([image4, image5, image6]);
    } else {
      setImageArr([image1, image2, image3]);
    }
  });

  function next() {
    if (index < 2) setIndex(index + 1);
    else setIndex(0);
  }
  function prev() {
    if (index > 0) setIndex(index - 1);
    else setIndex(2);
  }

  return (
    <div className="container">
      <div className="slide">
        <img src={imageArr[index]} style={{ width: "100%" }} />
      </div>

      <a className="prev" onClick={next}>
        ❮
      </a>
      <a className="next" onClick={prev}>
        ❯
      </a>
    </div>
  );
}

export default SlideShow;
