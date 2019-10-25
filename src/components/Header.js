import React, { Component } from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import { Container, Row, Col } from "../components/Grid";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Container>
          <Nav />
          <Row>
            <Col colnr="6">
              <Intro
                aClass="intro"
                title="Say hello to ReactJS"
                text="You will learn a Frontend framework from scratch, to become a Ninja Developer"
                button="Awesome!"
              />
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
