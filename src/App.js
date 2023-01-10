import './App.css';
import room from "./room.png";
import Footer from './components/footer.js'
import RegistrationPage from "./components/pages/RegistrationPage.js"
import LandingPage from "./components/pages/LandingPage.js"
import RejectionPage from './components/pages/RejectionPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Make mistakes now than later ;)</h1>
        <img src={room} className="Room-meme" alt="meme" />

      </header>
      <Footer />
      <RegistrationPage />
      <LandingPage />
      <RejectionPage />
    </div>
  );
}

export default App;
