import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => {
      setBackendData(data)
    }, [])
  })
  return (
    <div className="App">
      {(typeof backendData.users) ? (backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))) : <p>Loading...</p>}
    </div>
  )
}

export default App