import './App.css';
import room from "./room.png";
import Footer from './components/footer.js'
import RegistrationPage from "./components/pages/RegistrationPage.js"
import LandingPage from "./components/pages/LandingPage.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Make mistakes now than later ;)</h1>
        <img src={room} className="Room-meme" alt="meme" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
      <RegistrationPage />
      <LandingPage />

    </div>
  );
}

export default App;
