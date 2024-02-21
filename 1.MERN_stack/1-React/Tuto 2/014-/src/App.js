import React from 'react';
import './App.css';

function App() {
  //hooks
  const [isImpostant, setIsImportant] = React.useState("No");
  //console.log(isImpostant);

  function handleClick() {
    isImpostant === 'No' ? setIsImportant("Yes") : setIsImportant("No");
  }

  return (
    <div className="App">
      <h1>Is state importatnt to know ?</h1>
      <div className='res' onClick={handleClick}>
        <h1>{isImpostant}</h1>
      </div>
    </div>
  );
}

export default App;
