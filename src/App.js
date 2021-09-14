import "./App.css";
import Header from "./components/Header.js";
import Experiences from "./components/Experiences.js";
import Skills from "./components/Skills.js";
import Footer from "./components/Footer.js";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Experiences />
      <Skills />
      <Footer />
    </React.Fragment>
  );
}

export default App;
