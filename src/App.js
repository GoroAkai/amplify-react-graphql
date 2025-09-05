import logo from './logo.svg'; // ロゴ画像のインポート
import './App.css'; // CSSのインポート
import { useState } from 'react'; // ReactのuseStateフックをインポート

function App() {
  // ロゴ表示状態を管理するstate。初期値はtrue（表示）
  const [showLogo, setShowLogo] = useState(true);
  // ロゴの回転速度（秒）を管理するstate。初期値は20秒
  const [speed, setSpeed] = useState(20);

  return (
    <div className="App">
      <header className="App-header">
        {/* ロゴ表示/Hello world!切り替えボタン */}
        <button onClick={() => setShowLogo(!showLogo)}>
          表示切り替え
        </button>
        {/* showLogoがtrueならロゴとスライダー等を表示、falseならHello world!を表示 */}
        {showLogo ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* ロゴ画像。animationDurationで回転速度を変更 */}
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                style={{ animationDuration: `${speed}s` }}
              />
              {/* 回転速度を変更するスライダー */}
              <input
                type="range"
                min="2"
                max="40"
                value={speed}
                onChange={e => setSpeed(e.target.value)}
              />
              {/* 現在の回転速度（秒）を表示 */}
              <span>{speed}s</span>
            </div>
            {/* 編集案内テキスト */}
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            {/* React公式サイトへのリンク */}
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
          // showLogoがfalseならHello world!を表示
          <h1>Hello world!</h1>
        )}
      </header>
    </div>
  );
}

export default App;