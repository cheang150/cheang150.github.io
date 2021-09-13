import "./App.css";
import Header from "./components/Header.js";
import Experiences from "./components/Experiences.js";
import Skills from "./components/Skills.js";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Experiences />
      <Skills />
    </React.Fragment>
  );
}

export default App;
