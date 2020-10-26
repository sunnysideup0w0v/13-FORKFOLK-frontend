import React, { Component } from "react";
import "./ParallaxBackgroundContent.scss";
import backgroundImg from "../Image/alina-rubo-fjZ8wa1PhmI-unsplash.jpg";

class ParallaxBackgroundContent extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };
  }
  parallaxBg = () => {
    this.setState({ scrollY: window.scrollY });
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.parallaxBg();
    });
  }
  render() {
    return (
      <div className="ParallaxBackgroundContent">
        <img
          src={backgroundImg}
          alt="img"
          style={{ top: `${(this.state.scrollY - 7500) * 0.5}px` }}
        />
        <span>NINA RICCI</span>
      </div>
    );
  }
}

export default ParallaxBackgroundContent;
