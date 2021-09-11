import React from "react";
import "./Header.css";
import { Typewriter } from "react-simple-typewriter";

class Header extends React.Component {
  render() {
    return (
      <header>
        <p id="name">
          I'm <span>Wai Bin.</span>
        </p>
        <h1>
          <Typewriter words={["> Hello;"]} />
        </h1>
        <p id="description">A Passionate Software Developer.</p>
        <a href="#" download>
          Get CV
        </a>
      </header>
    );
  }
}

export default Header;
