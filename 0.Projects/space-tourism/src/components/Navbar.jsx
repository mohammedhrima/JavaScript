import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/menu.svg";
import openIcon from "../assets/shared/icon-open.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const links = [
    {
        id: "00",
        name: "HOME",
        path: "/home",
    },
    {
        id: "01",
        name: "DESTINATION",
        path: "/destination",
    },
    {
        id: "02",
        name: "CREW",
        path: "/crew",
    },
    {
        id: "03",
        name: "TECHNOLOGY",
        path: "/technology",
    },
];

function Navbar() {
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <img src={logo} className="logo" alt="logo" />
            <div className={`navs ${hidden && "hidden"}`}>
                {links.map(({ name, path, id }) => (
                    <nav onClick={() => navigate(path)} key={name}>
                        <b>{id}</b> {name}
                    </nav>
                ))}
            </div>
            <img src={hidden ? openIcon : closeIcon} className="nav-icon" onClick={() => setHidden(!hidden)} />
        </div>
    );
}

export default Navbar;
