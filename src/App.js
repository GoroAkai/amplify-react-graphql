/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React V3
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowLogo(!showLogo)}>
          表示切り替え
        </button>
        {showLogo ? (
          <>
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
              Learn React V3
            </a>
          </>
        ) : (
          <h1>Hello world!</h1>
        )}
      </header>
    </div>
  );
}

export default App;