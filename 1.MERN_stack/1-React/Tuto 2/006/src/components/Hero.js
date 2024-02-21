import React from "react"
import image1 from "./images/002.png";
import image2 from "./images/004.png";
import image3 from "./images/003.png";


function Content() {
    return (
        <div>
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

function Card() {
    return (
        <div>
            <img src={image2} />
            <br />
            <img src={image3} /><h1>5.0</h1>

        </div>
    )
}

function Hero() {
    return (
        <section>
            <img src={image1} alt="img2" />
            {Content()}
            {Card()}
        </section>
    )
}
export default Hero