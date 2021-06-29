import React, { Component } from "react";
import "./App.css";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
