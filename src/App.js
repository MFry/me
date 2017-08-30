import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Projects from './Projects';

const App = () =>
  (<main>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    </div>
    <header className="md-grid" />
    <Profile />
    <Projects />
  </main>);

export default App;
