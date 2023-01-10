import logo from './logo.svg';
import './App.css';
import Footer from './components/footer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Make mistakes now than later ;)</h1>
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
