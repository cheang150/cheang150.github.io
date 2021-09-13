import React from "react";
import "./Skill.css";

class Skill extends React.Component {
  render() {
    return (
      <article className="skillArticle">
        <article className="images">
          {this.props.datas.map((data) => {
            return (
              <figure
                style={{ backgroundColor: data.color }}
                data-aos="fade-up"
              >
                <img src={data.src} alt={data.name} />
                <p className="description">{data.name}</p>
              </figure>
            );
          })}
        </article>
      </article>
    );
  }
}

export default Skill;
