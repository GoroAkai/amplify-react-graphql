import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [speed, setSpeed] = useState(20); // 初期値20秒

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowLogo(!showLogo)}>
          表示切り替え
        </button>
        {showLogo ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                style={{ animationDuration: `${speed}s` }}
              />
              <input
                type="range"
                min="2"
                max="40"
                value={speed}
                onChange={e => setSpeed(e.target.value)}
              />
              <span>{speed}s</span>
            </div>
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
