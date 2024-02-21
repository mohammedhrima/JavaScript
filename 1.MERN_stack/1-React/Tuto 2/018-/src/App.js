import React from 'react';
import './App.css';
import Box from './box';
import boxes from './boxes.js'

console.log(boxes);
/*
let makeboxes = Object.keys(boxes).map(key => {
  console.log("key is ", key);
  return (<p key={key}>Box {boxes[key].id}</p>)
})
*/
function App(props) {
  const [squares, setSquare] = React.useState(boxes)

  const makeboxes = squares.map(square => (
    <Box key={square.id} on={square.on} />
  ))

  return (
    <main>
      <h1>Boxes will go here</h1>
      {makeboxes}
    </main>
  );
}

export default App;
