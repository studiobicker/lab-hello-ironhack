import React, { Component } from "react";

class Feature extends Component {
  render() {
    const { aClass, image, title, text } = this.props;
    return (
      <div className={aClass}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
  }
}

export default Feature;
