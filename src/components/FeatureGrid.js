import React, { Component } from "react";
import Feature from "../components/Feature";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

class FeatureGrid extends Component {
  render() {
    return (
      <ul className="feature-grid">
        <li>
          <Feature
            aClass="feature"
            image={icon1}
            title="Declarative"
            text="Reacts makes it painless to create interactive UI's."
          />
        </li>
        <li>
          <Feature
            aClass="feature"
            image={icon2}
            title="Components"
            text="Build encapsulated components that manage their state."
          />
        </li>
        <li>
          <Feature
            aClass="feature"
            image={icon3}
            title="Single Way"
            text="A set of immutable values are passed to the components"
          />
        </li>
        <li>
          <Feature
            aClass="feature"
            image={icon4}
            title="JSX"
            text="Statically-typed, designed to run on modern browers."
          />
        </li>
      </ul>
    );
  }
}

export default FeatureGrid;
