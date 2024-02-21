import "./global.css";
import { h7, b } from "./components/Global";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

function App() {
    return (
        <div id="App">
            <Navbar />
            <Routes>
                <Route path="/home" index element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
