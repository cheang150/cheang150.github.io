import React from "react";
import "./Skills.css";
import Skill from "./Skill.js";
import html from "../img/html.svg";
import css from "../img/css.svg";
import react from "../img/react.svg";
import node from "../img/node.svg";
import php from "../img/php.svg";
import git from "../img/git.svg";
import sql from "../img/sql.svg";
import scikit from "../img/scikit.svg";
import pandas from "../img/pandas.svg";
import opencv from "../img/opencv.svg";
import seaborn from "../img/seaborn.svg";
import matplotlib from "../img/matplotlib.svg";
import selenium from "../img/selenium.svg";
import mocha from "../img/mocha.svg";
import haskell from "../img/haskell.svg";
import python from "../img/python.svg";
import java from "../img/java.svg";
import c from "../img/c.svg";

class Skills extends React.Component {
  state = {
    skills: [
      {
        name: "HTML",
        src: html,
        color: "rgba(227, 79, 38, 0.15)",
      },
      {
        name: "CSS",
        src: css,
        color: "rgba(38, 77, 228, 0.15)",
      },
      {
        name: "React",
        src: react,
        color: "rgba(97, 218, 251, 0.15)",
      },
      {
        name: "NodeJS",
        src: node,
        color: "rgba(104, 159, 99, 0.15)",
      },
      {
        name: "PHP",
        src: php,
        color: "rgba(119, 123, 179, 0.15)",
      },
      {
        name: "Mocha",
        src: mocha,
        color: "rgba(141, 103, 72, 0.15)",
      },
      {
        name: "SQL",
        src: sql,
        color: "rgba(0, 117, 143, 0.15)",
      },
      {
        name: "Python",
        src: python,
        color: "rgba(75, 138, 190, 0.15)",
      },
      {
        name: "Scikit-learn",
        src: scikit,
        color: "rgba(248, 153, 57, 0.15)",
      },
      {
        name: "Pandas",
        src: pandas,
        color: "rgba(19, 7, 84, 0.15)",
      },
      {
        name: "OpenCV",
        src: opencv,
        color: "rgba(242, 242, 242, 1)",
      },
      {
        name: "Seaborn",
        src: seaborn,
        color: "rgba(92, 125, 162, 0.15)",
      },
      {
        name: "Matplotlib",
        src: matplotlib,
        color: "rgba(242, 242, 242, 1)",
      },
      {
        name: "Selenium",
        src: selenium,
        color: "rgba(44, 177, 52, 0.15)",
      },
      {
        name: "Java",
        src: java,
        color: "rgba(21, 101, 192, 0.15)",
      },
      {
        name: "C",
        src: c,
        color: "rgba(40, 53, 147, 0.15)",
      },
      {
        name: "Haskell",
        src: haskell,
        color: "rgba(94, 80, 134, 0.15)",
      },
      {
        name: "Git",
        src: git,
        color: "rgba(240, 82, 51, 0.15)",
      },
    ],
  };

  render() {
    return (
      <section className="skills">
        <h1 id="sectionTitle" data-aos="fade-right">
          Core Competencies
        </h1>
        <p id="sectionDescription" data-aos="fade-up">
          Capabilities that comprise the strategic advantages of your company
        </p>
        <Skill datas={this.state.skills} />
      </section>
    );
  }
}

export default Skills;
