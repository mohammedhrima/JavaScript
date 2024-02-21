import './App.css';
import cats from './data';

//const arr = cats.map(cat => { return (cat.name) })


function App() {
  return (
    <div className="App">
      {
        cats.map(cat => {
          return (
            <div>
              {!cat.sold && <p className='sold'>sold</p>}
              <img src={require(`./images/${cat.image}`)} alt={cat.name} height='100px' />
              <h1>name: {cat.name} {`images/${cat.image}`}</h1>
              <p>age: {cat.age}</p>
              <p>color: {cat.color}</p>
              <p>city: {cat.city}</p>

              <hr />
            </div>
          )
        })
      }
    </div>


  )


}

export default App;
