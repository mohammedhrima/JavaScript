import MyHeader from "./Header.js";
import image from "./logo512.png"
import './App.css';

function MyIls() {
  return (
    <div>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </div>
  )
}

function MyUl() {
  return (
    <ul className="Test">
      <MyIls />
    </ul>
  )
}

function MyNavBar() {
  return (
    <div id="NavBar">
      <h4>Pricing</h4>
      <h4>About</h4>
      <h4>Contact</h4>
    </div>

  )
}

function App() {
  return (
    <div>
      <MyNavBar />
      <MyHeader />
      <MyUl />
      <img src={image} alt="icon" />
    </div>)
}

export default App;