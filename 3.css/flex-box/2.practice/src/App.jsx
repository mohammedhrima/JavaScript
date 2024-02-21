import { useState } from "react";
import "./App.css";
import plus from "./assets/icon-plus.svg";
import star from "./assets/icon-star.svg";
import minus from "./assets/icon-minus.svg";

const cards = [
    {
        title: "What is Frontend Mentor, and how will it help me?",
        content: `Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.`,
    },
    {
        title: "Is Frontend Mentor free?",
        content: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                option providing access to a range of projects suitable for all skill levels.`,
    },
    {
        title: "Can I use Frontend Mentor projects in my portfolio?",
        content: `Yes, you can use projects completed on Frontend Mentor in your portfolio. 
                It's an excellent way to showcase your skills to potential employers!`,
    },
    {
        title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        content: `The best place to get help is inside Frontend Mentor's Discord community. 
                There's a help channel where you can ask questions and seek support from other 
                community members.`,
    },
];

function Card({ title, content }) {
    const [show, setShow] = useState(true);
    return (
        <div className="card" style={{ borderTop: show ? "" : "1px solid hsl(292, 16%, 49%)" }}>
            <span>
                <h5>{title}</h5>
                <img
                    src={show ? minus : plus}
                    // alt="Plus icon" style={{ verticalAlign: "middle" }}
                    onClick={() => setShow(!show)}
                />
            </span>
            <p style={{ display: show ? "block" : "none" }}>{content}</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <div className="bg"></div>
            <div className="container">
                <span className="faq">
                    <img src={star} />
                    <h1>FAQs</h1>
                </span>
                <div className="cards">
                    {cards.map(({ title, content }) => (
                        <Card title={title} content={content} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
