import React from "react";
import { Container, Row } from "./components/Grid";
import Header from "./components/Header";
import FeatureGrid from "./components/FeatureGrid";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Container>
          <Row>
            <FeatureGrid />
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
