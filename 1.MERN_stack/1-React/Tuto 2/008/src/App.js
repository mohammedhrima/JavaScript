import './App.css';
import image1 from "./images/001.jpg";
import image2 from "./images/002.jpg";
import image3 from "./images/003.jpg";
import image4 from "./images/004.jpg";


function Cat(props) {
  return (
    <div className='contact-card'>
      <img src={props.image} />
      <span>
        <h3>{props.name}</h3>
        <h1><i className="fa-solid fa-phone"></i>{props.phonenumber}</h1>
        <h1><i className="fa-solid fa-envelope"></i>{props.email}</h1>
      </span>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Cat
        image={image1}
        name="Mohammed"
        phonenumber="0657804824"
        email="mohammedxhrima@gmail.com" />
    </div>

  );
}

export default App;
