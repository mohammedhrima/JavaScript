import './App.css';

function Header() {
  return (
    <div className="Header_">
      <div className='myImg'>
        <img src={require('./img/001.jpg')} />
      </div>
      <div className='Info'>
        <h1>Hrima Mohammed</h1>
        <h1><i className="fa-brands fa-react"></i> React Developper</h1>
        <h1><i className="fa-solid fa-envelope"></i> mohammedxhrima@gmail.com</h1>
        <h1><i className="fa-solid fa-phone"></i> 065780424</h1>
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className='Profile_'>
      <h1>Profile-title</h1>
      <p>
        "On the other hand, we denounce with righteous indignation and dislike men who are
        so beguiled and demoralized by the charms of pleasure of the moment, so blinded by
        desire, that they cannot foresee the pain and trouble that are bound to ensue; and
        equal blame belongs to those who fail in their duty through weakness of will, which
        is the same as saying through shrinking from toil and pain. These cases are perfectly
        simple and easy to distinguish. In a free hour, when our power of choice is untrammelled
        and when nothing prevents our being able to do what we like best, every pleasure is to be
        welcomed and every pain avoided. But in certain circumstances and owing to the claims of
        duty or the obligations of business it will frequently occur that pleasures have to be
        repudiated and annoyances accepted. The wise man therefore always holds in these matters
        to this principle of selection: he rejects pleasures to secure other greater pleasures, or else
        he endures pains to avoid worse pains."
      </p>
    </div>
  )
}

function Experience() {
  return (
    <div className='Experience'>
      <h1>Experience</h1>
      <div>
        <p>Experience 1</p>
        <p>Experience 2</p>
        <p>Experience 3</p>
        <p>Experience 4</p>
      </div>
    </div>
  )
}

function AcademicSkills() {
  return (
    <div className='Academic-skills'>
      <div>
        <h1>Academic</h1>
        <p>item 1</p>
        <p>item 2</p>
      </div>
      <div>
        <h1>Skills</h1>
        <p>skill 1</p>
        <p>skill 2</p>
      </div>
    </div>
  )
}

function IntrestLanguages() {
  return (
    <div className='Academic-skills'>
      <div>
        <h1>Interest</h1>
        <p>interest 1</p>
        <p>intesrest 2</p>
      </div>
      <div>
        <h1>Languages</h1>
        <p>Language 1</p>
        <p>Language 2</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Experience />
      <AcademicSkills />
      <IntrestLanguages />
    </div>
  );
}

export default App;
