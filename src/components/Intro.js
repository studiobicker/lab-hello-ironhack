import React, { Component } from "react";

class Intro extends Component {
  render() {
    const { aClass, title, text, button } = this.props;
    return (
      <div className={aClass}>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{button}</button>
      </div>
    );
  }
}

export default Intro;
