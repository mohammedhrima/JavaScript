import './App.css';
import datas from './data';

function Header() {
  return (
    <div className='Header'>
      <p> <i class="fa-solid fa-earth-africa"></i> my travel journal.</p>
    </div>
  )
}

function Container() {
  return (

    datas.map(data => {
      return (
        <div className='data'>
          <img src={require(`./images/${data.image}.png`)} alt={data.name} />
          <div>
            <h1>{data.town}</h1>
            <h3>{data.name}</h3>
            <h2>{data.date}</h2>
            <p>{data.txt}</p>
          </div>
        </div>
      );
    })

  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
