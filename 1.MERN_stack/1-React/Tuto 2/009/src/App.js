import './App.css';

function Iam(props) {
  return (
    <div>
      <h1>My name is {props.name}</h1><br />
      <h1>I am {props.age} years old</h1><br />
      <h1>I am from {props.city}</h1><br />
      <hr /><br />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Iam name="mohammed" age="22" city="Safi" />
      <Iam name="Ziyad" age="19" city="Safi" />
      <Iam name="Aicha" age="12" city="Safi" />
    </div>
  );
}

export default App;
