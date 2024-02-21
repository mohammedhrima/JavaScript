import React from 'react';
import './App.css';
import Box from './box';
import boxes from './boxes.js'

/*
let makeboxes = Object.keys(boxes).map(key => {
  console.log("key is ", key);
  return (<p key={key}>Box {boxes[key].id}</p>)
})
*/
function App(props) {
  const [squares, setSquare] = React.useState(boxes)

  function Change(ID) {
    console.log(ID);
    console.log(squares[ID])
    setSquare(prevSquare => {
      const newSquare = []
      for (let the_square in squares) {
        if (the_square.id === ID) {
          return {
            ...the_square,
            id: !the_square.id
          }
        }
        else {

        }
      }
    })
  }

  const makeboxes = squares.map(square => {
    // console.log("line 19 in app,", square)
    return (
      <Box
        obj={square}
        key={square.id}
        id={square.id}
        func={Change}
      />
    )
  }
  )

  return (
    <main>
      <h1>Boxes will go here</h1>
      {makeboxes}
    </main>
  );
}

export default App;