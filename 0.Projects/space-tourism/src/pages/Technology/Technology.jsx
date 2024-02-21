import React, { useState } from "react";
import "./Technology.css";
import avatar11 from "../../assets/technology/space-launch1.svg";
import avatar12 from "../../assets/technology/space-launch2.svg";
import avatar13 from "../../assets/technology/space-launch3.svg";
import avatar21 from "../../assets/technology/space-port1.svg";
import avatar22 from "../../assets/technology/space-port2.svg";
import avatar23 from "../../assets/technology/space-port3.svg";
import avatar31 from "../../assets/technology/space-capsule1.svg";
import avatar32 from "../../assets/technology/space-capsule2.svg";
import avatar33 from "../../assets/technology/space-capsule3.svg";

const crews = [
    {
        id: 0,
        name: "Space capsule",
        details: `A space capsule is an often-crewed spacecraft that 
        uses a blunt-body reentry capsule to reenter the Earth's atmosphere
        without wings. Our capsule is where you'll spend your time during 
        the flight. It includes a space gym, cinema, and plenty of other 
        activities to keep you entertained.`,
        image: avatar11,
    },
    {
        id: 1,
        name: "Spaceport",
        details: `A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft. 
        Based in the famous Cape Canaveral, our spaceport is ideally situated to 
        take advantage of the Earth’s rotation for launch.`,
        image: avatar21,
    },
    {
        id: 2,
        name: "Launch vehicle",
        details: `A launch vehicle or carrier rocket is a rocket-propelled vehicle
        used to carry a payload from Earth's surface to space, usually to Earth 
        orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. 
        Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
        image: avatar31,
    },
];

function Technology() {
    const [{ name, details, image }, setObj] = useState(crews[0]);
    return (
        <div className="tech">
            <div className="left">
                <div className="details">
                    <h4>{name.toUpperCase()}</h4>
                    <p>{details}</p>
                </div>
                <div className="nums">
                    {crews.map(({ id }) => (
                        <span onClick={() => setObj(crews[id])}>
                            <h4>{id}</h4>
                        </span>
                    ))}
                </div>
            </div>
            <div className="right">
                <img src={image} alt="" />
            </div>
        </div>
    );
}

export default Technology;
