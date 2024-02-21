import './App.css';

function Header() {
  return (
    <div className='Header'>
      <div id='logo'>
        <img src={require('./image/002.png')} alt='icon' />
        <h4>Meme Generator</h4>
      </div>

    </div>
  )
}

function Generator() {

  return (
    <div className='Gen'>
      <input type="text" className='left' />
      <input type="text" className='right' />
      <br />
      <button type='button' onClick={() => {
        document.getElementById("top").textContent = document.getElementsByClassName("left")[0].value;
        document.getElementById("bottom").textContent = document.getElementsByClassName("right")[0].value;
      }}>Get a new meme image</button>
      <br />
      <div className='Container'>
        <br />
        <h4 id='top'></h4><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><h4 id='bottom'></h4>
      </div>
      <img src={require('./image/001.png')} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Generator />
    </div>
  );
}

export default App;
