import React from 'react';
import './App.css';

function Header(name) {
  const [user, setUser] = React.useState(name)
  return (
    <div className='Header'>
      <p>Current user: {user}</p>
    </div>
  )
}

function Welcome(props) {

  return (
    <div>
      {Header(props.name)}
      <div className='Welcome'>
        <h2>Welcoem back, {props.name}</h2>
      </div>
    </div>


  )
}


function App() {
  return (
    <div className="App">
      <Welcome name={"mohammed"} />
    </div>
  );
}

export default App;
