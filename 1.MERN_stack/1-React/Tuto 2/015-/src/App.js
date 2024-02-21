import './App.css';
import React from 'react';

function App() {
  const [count, set] = React.useState(0)
  return (
    <div className="App">
      <h1><span>{count}</span></h1>
      <h1 onClick={() => set(count - 1)}>-</h1>
      <h1 onClick={() => set(count + 1)}>+</h1>
    </div>
  );
}

export default App;
