import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1> Primeiro Commit ReactJS</h1>
          <p>Teste de Commit</p>
          <p>Um commit pra teste</p>

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
    </div>
  );
}

export default App;
