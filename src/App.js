import React from 'react';
import logo from './logo.svg';
import Projects from './Projects';
// components
import Emoji from './Emoji';

// styles
import './App.scss';
import './style/scss/main.scss';

// modules
import cssStyles from './First.module.css';
import sassStyles from './Second.module.scss';

// eslint-disable-next-line
const Test = () =>
  (<div className="App">
    <div className={cssStyles.header}>
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-title">
        <Emoji label="danger" emoji="☢" />
        <span> custom-react-scripts </span>
        <Emoji label="danger" emoji="☢" />
      </h2>
      <div className="App-subtitle">allow custom config for create-react-app without ejecting</div>
    </div>

    <div className={sassStyles.command}>
      <code>create-react-app my-app --scripts-version custom-react-scripts</code>
    </div>
  </div>);

const App = () =>
  (<div className="Container">
    <Projects />
  </div>);

export default App;
