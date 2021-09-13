import React from "react";
import "./Experience.css";
import Collapsible from "react-collapsible";
import Aos from "aos";
import "aos/dist/aos.css";

class Experience extends React.Component {
  componentDidMount() {
    Aos.init();
  }

  render() {
    const sectionStyle = {
      backgroundColor: this.props.bgColor,
      margin: this.props.alignLeft ? "0 10% 0 0" : "0 0 0 10%",
    };

    const iconStyle = {
      backgroundColor: this.props.iconColor,
      borderRadius: "50%",
      padding: "2%",
    };

    const innerSectionStyle = {
      marginLeft: this.props.alignLeft ? "45%" : "",
      marginRight: this.props.alignLeft ? "" : "45%",
    };

    return (
      <section
        id={this.props.id}
        style={sectionStyle}
        data-aos={this.props.alignLeft ? "fade-right" : "fade-left"}
      >
        <div className="innerSectionMargin" style={innerSectionStyle}>
          <img
            src={this.props.icon}
            alt={this.props.id + " icon"}
            style={iconStyle}
          />
          <h1 className="sectionTitle">{this.props.id}</h1>

          <article className="expArticle">
            <p>{this.props.datas[0].name}</p>
            <p className="role">{this.props.datas[0].role}</p>
            <ul>
              {this.props.datas[0].descriptions.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
            {/* <span className="expandButton">SEE MORE</span> */}
          </article>
          <Collapsible trigger="SEE MORE" triggerWhenOpen="">
            {this.props.datas.slice(1).map((data) => {
              return (
                <article className="expArticle">
                  <p>{data.name}</p>
                  <p className="role">{data.role}</p>
                  <ul>
                    {data.descriptions.map((description) => (
                      <li>{description}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </Collapsible>
        </div>
      </section>
    );
  }
}

export default Experience;
