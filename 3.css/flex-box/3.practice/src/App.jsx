import "./App.css";
import list from "./assets/list.svg";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="left">
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        {["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"].map((str) => (
                            <span>
                                <img src={list} alt="icon" />
                                <p>{str}</p>
                            </span>
                        ))}
                    </ul>
                    <div className="sub">
                        <h4>Email address</h4>
                        <input type="email" placeholder={"email@company.com"} />
                        <button>Subscribe to monthly newsletter</button>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}

export default App;
