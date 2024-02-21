import React, { useState } from "react";
import "./Crew.css";
import avatar1 from "../../assets/crew/avatar1.svg";
import avatar2 from "../../assets/crew/avatar2.svg";
import avatar3 from "../../assets/crew/avatar3.svg";
import avatar4 from "../../assets/crew/avatar4.svg";

const crews = [
    {
        role: "Commander",
        name: "Douglas Hurley",
        details: `Douglas Gerald Hurley is an American engineer, 
        former Marine Corps pilot and former NASA astronaut. He 
        launched into space for the third time as commander of 
        Crew Dragon Demo-2.`,
        image: avatar2,
    },
    {
        role: "Flight Engineer",
        name: "Anousheh Ansari",
        details: `Anousheh Ansari is an Iranian American engineer 
        and co-founder of Prodea Systems. Ansari was the fourth 
        self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.`,
        image: avatar1,
    },
    {
        role: "Pilot",
        name: "Victor Glover",
        details: `Pilot on the first operational flight of the 
        SpaceX Crew Dragon to the International Space Station. 
        Glover is a commander in the U.S. Navy where he pilots 
        an F/A-18.He was a crew member of Expedition 64, and 
        served as a station systems flight engineer.`,
        image: avatar4,
    },
    {
        role: "Mission Specialist",
        name: "Mark Shuttleworth",
        details: `Mark Richard Shuttleworth is the founder and 
        CEO of Canonical, the company behind the Linux-based 
        Ubuntu operating system. Shuttleworth became the first South 
        African to travel to space as a space tourist.`,
        image: avatar3,
    },
];

function Crew() {
    const [{ role, name, details, image }, setObj] = useState(crews[0]);
    return (
        <div className="crew">
            <div className="left">
                <h4>MEET YOUR CREW :</h4>
                <div>
                    <h4>{name.toUpperCase()}</h4>
                    <p>{details}</p>
                </div>
                <div className="slider">
                    {crews.map((crew) => (
                        <span onClick={() => setObj(crew)}></span>
                    ))}
                </div>
            </div>
            <div className="right">
                <img src={image} alt="" />
            </div>
        </div>
    );
}

export default Crew;
