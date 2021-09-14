import React from "react";
import Experience from "./Experience";
import hat from "../img/hat.svg";
import bag from "../img/bag.svg";

class Experiences extends React.Component {
  state = {
    education: [
      {
        name: "The University of Nottingham",
        role: "BSc Hons Computer Science with Artificial Intelligence",
        descriptions: [
          "First-class Honours",
          "Recipient of Dean’s List Academic Achievement Award",
        ],
      },
      {
        name: "The University of Nottingham Malaysia Campus",
        role: "Foundation in Science (Computer Science)",
        descriptions: [
          "First-class Honours",
          "Recipient of High Achiever Award",
        ],
      },
    ],
    work: [
      {
        name: "Inari Technology Sdn Bhd",
        role: "Software Automation Intern",
        descriptions: [
          "Collaborated closely with a team of 3 people to design an employee entry system based on their health status.",
          "Reverse-engineered government’s healthcare application to identify the AES encryption secret key.",
          "Discovered opportunity to automate web form-based information extractor with pyTesseract Optical Character Recognition and improved user in-app time by 80%.",
          "Researched Python Selenium and developed a web scraper to optimize previous OCR information extractor accuracy by 15%.",
        ],
      },
      {
        name: "Inari Technology Sdn Bhd",
        role: "Production Technician",
        descriptions: [
          "Coordinated effectively with a production engineer to streamline an automated extract-transform-load process to push datas from machines’ log files to database.",
          "Modelled and visualize data extracted from log files and successfully create business values that lead to 30% workforce reduction with Pandas and Seaborn.",
          "Automate manual back-office processing through VBA scripting and automation engine.",
        ],
      },
    ],
    icons: [hat, bag],
  };

  render() {
    return (
      <React.Fragment>
        <Experience
          id={Object.keys(this.state)[0]}
          alignLeft={false}
          bgColor="rgb(252,248,246)"
          iconColor="rgb(247,218,184)"
          icon={this.state.icons[0]}
          datas={this.state.education}
        />
        <Experience
          id={Object.keys(this.state)[1]}
          alignLeft={true}
          bgColor="rgb(245,250,250)"
          iconColor="rgb(217,243,249)"
          icon={this.state.icons[1]}
          datas={this.state.work}
        />
      </React.Fragment>
    );
  }
}

export default Experiences;
