import './App.css';
import image1 from "./images/001.jpg";
import image2 from "./images/002.jpg";
import image3 from "./images/003.jpg";
import image4 from "./images/004.jpg";


function Cat(name, image, phonenumber, email) {
  return (
    <div className='contact-card'>
      <img src={image} />
      <span>
        <h3>{name}</h3>
        <h1><i class="fa-solid fa-phone"></i>{phonenumber}</h1>
        <h1><i class="fa-solid fa-envelope"></i>{email}</h1>
      </span>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      {Cat("Mr.Whiskerson", image1, "(212) 555-1234", "mr.whiskaz@catnap.meow")}
      {Cat("Mr.Whiskerson", image2, "(212) 555-1234", "mr.whiskaz@catnap.meow")}
      {Cat("Mr.Whiskerson", image3, "(212) 555-1234", "mr.whiskaz@catnap.meow")}
      {Cat("Mr.Whiskerson", image4, "(212) 555-1234", "mr.whiskaz@catnap.meow")}
    </div>

  );
}

export default App;
