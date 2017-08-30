import React from "react";
import Toolbar from "react-md/lib/Toolbars";
import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Profile from "./Profile";
import Projects from "./Projects";

const App = () =>
  <main>
    <Toolbar colored title="Michal Frystacky" />
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    </div>
    <header className="md-grid" />
    <Profile />
    <Projects />
  </main>;

export default App;
