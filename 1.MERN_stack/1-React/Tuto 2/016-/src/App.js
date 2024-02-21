import React from 'react';
import './App.css';

function App() {
  // const [things, set] = React.useState(["thing 1", "thing 2"]);
  //  function add(arr) { set(arr => [...arr, `thing ${arr.length + 1}`]) }
  // let fullarr = things.map(thing => <p key={thing}>{thing}</p>)
  /////////////////////////////////////////////////////
  const [contact, set1] = React.useState({
    name: "mohammed",
    age: "22 y.o",
    city: "safi",
    hobbie: "calisthenics",
    fav: true,
  })

  let p = Object.keys(contact).map((Key) => (Key !== "fav") && <p key={Key}>{Key} {contact[Key]}</p>)

  /////////////////////////////////////////////////////
  return (
    <div className="App">

      <div className='Container'>
      </div>
      <br />
      <div className='usr'>
        {p}
      </div>
      <span onClick={() => {
        set1(thisContact => {
          return {
            ...thisContact,
            fav: !thisContact.fav
          }
        })
      }}><i className={`fa-solid ${(contact.fav) ? "fa-star" : "fa-star-half-stroke"}`}></i></span>
    </div >
  );
}

export default App;
