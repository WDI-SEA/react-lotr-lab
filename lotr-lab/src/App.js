import logo from './logo.svg';
import './App.css';
import Movie from './movie';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie title={"Fellowship of the Ring"} hours={2} minutes={58} />
        <Movie title={"The Two Towers"} hours={2} minutes={59} />
        <Movie title={"Return of the King"} hours={3} minutes={22} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
