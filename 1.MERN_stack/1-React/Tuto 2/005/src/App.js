import './App.css';

function Header() {
  return (
    <div className='Header'>
      <h3>Mike Smith</h3>
      <p>Frontend Developer</p>
      <p>mikesmith.website</p>
      <button className='btn1'><i className="fa-solid fa-envelope"></i> Email</button>
      <button className='btn2'><i className="fa-brands fa-linkedin"></i> Linkedin</button>
    </div >
  )
}

function About() {
  return (
    <div className='About'>
      <h1>About</h1>
      <p>
        I am a frontend developer with a particular interest<br />
        in making things simple and automating daily tasks.<br />
        I try to keep up with security and best practices,<br />
        and am always looking for new things to learn.
      </p>
    </div>
  )
}

function Intrests() {
  return (
    <div className='Interests'>
      <h1>Interests</h1>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic.<br />
        Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.<br />
        Coffee fanatic.
      </p>
    </div>
  )
}

function Footer() {
  return (
    <div className='Footer'>
      <i className="fa-brands fa-twitter-square"></i>
      <i className="fa-brands fa-facebook-square"></i>
      <i className="fa-brands fa-instagram-square"></i>
      <i className="fa-brands fa-github-square"></i>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Intrests />
      <Footer />
    </div>

  );
}

export default App;
