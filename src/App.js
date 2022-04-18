import logo from './my-pic.jpg';
import './App.css';
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaInstagram } from "react-icons/fa"
import { GoMail } from "react-icons/go";
import { IconContext } from "react-icons";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-pic" alt="logo" />
      <h1 className='my-name'>Ahmed Magdy</h1>
      <h3 className='text-color'>Frontend Developer</h3>
      <p>Ahmedmagdy.website</p>
      </header>
      
      <IconContext.Provider value={{ className: "button-icons" }}>
      <div className='buttons'>
        <button className='email'>
        <GoMail />Email</button>
        <button className='linkedin'> <a href='https://www.linkedin.com/in/ahmed-magdy-9282811aa/'></a>
          <FaLinkedin />LinkedIn </button>
      </div>
      </IconContext.Provider>


      <main className='main-content'>
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
        I try to keep up with security and best practices, and am always looking for new things to learn.
        </p>
        <h2>Interests</h2>
        <p>Poetry. Languages. Reader. Internet fanatic. Sport. Entrepreneur. Technology enthusiast. 
          Chess. Coffee fanatic.</p>
      </main>


      <IconContext.Provider value={{ className: "footer-icons" }}>
      <footer className='footer-content'>
      <button className='facebook'><FaFacebookSquare /></button>
      <button className='twitter'><FaTwitterSquare /></button>
      <button className='github'><FaGithubSquare /></button>
      <button className='insta'><FaInstagram /></button>
      </footer>
      </IconContext.Provider>
    </div>
  );
}

export default App;
