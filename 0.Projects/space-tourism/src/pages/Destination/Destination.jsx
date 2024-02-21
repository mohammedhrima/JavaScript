import React from "react";
import "./Destination.css";
import { useState } from "react";
import moon from "../../assets/destination/moon.svg";
import mars from "../../assets/destination/mars.svg";
import titan from "../../assets/destination/titan.svg";
import europa from "../../assets/destination/europa.svg";

const dests = {
    MOON: {
        details: `See our planet as you've never seen it before. 
        A perfect relaxing trip away to help regain perspective 
        and come back refreshed. While you're there, take in 
        some history by visiting the Luna 2 and Apollo 11 landing
        sites.`,
        avg: "384,400 km",
        est: "3 years",
        img: moon,
    },
    MARS: {
        details: `Don't forget to pack your hiking boots. 
        You'll need them to tackle Olympus Mons, the tallest planetary 
        mountain in our solar system. It's two and a half times 
        the size of Everest!`,
        avg: "225 mil. km",
        est: "9 months",
        img: mars,
    },
    EUROPA: {
        details: `The smallest of the four Galilean moons orbiting
        Jupiter, Europa is a winter lover's dream. With an icy surface,
        it's perfect for a bit of ice skating, curling, hockey, or 
        simple relaxation in your snug wintery cabin.`,
        avg: "628 mil. km",
        est: "3 years",
        img: europa,
    },
    TITAN: {
        details: `The only moon known to have a dense atmosphere
        other than Earth, Titan is a home away from home (just a 
        few hundred degrees colder!). As a bonus, you get striking 
        views of the Rings of Saturn.`,
        avg: "1.6 bil. km",
        est: "7 years",
        img: titan,
    },
};

function Destination() {
    const [name, setName] = useState("MOON");
    const [{ details, avg, est, img }, setObj] = useState(dests[name]);
    const handleClique = (new_name) => {
        setName(new_name);
        setObj(dests[new_name]);
    };
    return (
        <div className="dest">
            <div className="left">
                <h4>PICK YOUR DESTINATION</h4>
                <img src={img} />
            </div>
            <div className="right">
                <div className="names">
                    {Object.keys(dests).map((key) => (
                        <span onClick={() => handleClique(key)} style={{ borderBottom: name == key ? "1px solid var(--white)" : "" }}>
                            <h5>{key}</h5>
                        </span>
                    ))}
                </div>
                <div className="details1">
                    <h2>{name}</h2>
                    <p>{details}</p>
                </div>
                <div className="details2">
                    <div>
                        <h5>AVG. DISTANCE</h5>
                        <h4>{avg}</h4>
                    </div>
                    <div>
                        <h5>EST. TRAVEL TIME</h5>
                        <h4>{est}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
