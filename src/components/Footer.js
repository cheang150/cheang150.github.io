import React from "react";
import "./Footer.css";
import faq from "../img/faq.svg";
import blob from "../img/blob.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section data-aos="fade-up" data-aos-offset="150">
          <img src={faq} alt="question icon" id="faq" />
          <section className="actualSection">
            <article>
              <h1 data-aos="fade-right">Contact Me</h1>
              <p data-aos="fade-right">
                Let's work together towards a common vision
              </p>
            </article>
            <a
              href="mailto:cwb_chg@hotmail.com"
              data-aos="zoom-in"
              data-aos-offset="220"
            >
              Let's Chat!
            </a>
            <img src={blob} alt="blob" id="blob" />
          </section>
        </section>

        <section class="contactInfo">
          <p className="quote">Stay Connected</p>
          <p>Penang, MY</p>
          <p>cwb_chg@hotmail.com</p>
          <p>(+60)13-446-0268</p>
          <a
            href="https://github.com/cheang150"
            class="profile"
            target="_blank"
          >
            <figure id="github" data-aos="zoom-in" data-aos-offset="45">
              <img src={github} alt="github" />
            </figure>
          </a>
          <a
            href="https://www.linkedin.com/in/cheang-wai-bin"
            class="profile"
            target="_blank"
          >
            <figure id="linkedin" data-aos="zoom-in" data-aos-offset="45">
              <img src={linkedin} alt="linkedin" />
            </figure>
          </a>
          <a
            href="https://www.instagram.com/cheang_waibin/"
            class="profile"
            target="_blank"
          >
            <figure id="instagram" data-aos="zoom-in" data-aos-offset="45">
              <img src={instagram} alt="instagram" />
            </figure>
          </a>
        </section>
      </footer>
    );
  }
}

export default Footer;
