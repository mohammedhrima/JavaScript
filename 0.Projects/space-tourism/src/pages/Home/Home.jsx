import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="left">
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                <p>{`Let's face it, if you want to 
                    go to space, you might as well genuinely 
                    go to outer space and not hover kind of on 
                    the edge of it. Well sit back, and relax because 
                    we will give you a truly out of this world experience!`}</p>
            </div>
            <div className="right">
                <div className="top">
                    <div className="bottom" onClick={() => navigate("/destination")}>
                        <h4>EXPLORE</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
