import React from "react";

function Container(props) {
  return <div className="container">{props.children}</div>;
}

function Row(props) {
  return <div className="row">{props.children}</div>;
}

function Col(props) {
  return <div className={`col-${props.colnr}`}>{props.children}</div>;
}

export { Container, Row, Col };
