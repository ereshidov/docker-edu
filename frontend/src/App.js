import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick = () => {
    console.log('make api request was clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          asdjlaksjdasdskal
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

      <button onClick={handleClick} >Make API TESTT</button>
    </div>
  );
}

export default App;
