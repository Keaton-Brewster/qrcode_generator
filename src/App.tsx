import React, { ReactElement } from "react";
import QRCode from "./Components/QRCode";

import { Container, Nav, Navbar } from "react-bootstrap";

import "./App.css";

export default function App(): ReactElement {
  const { Brand, Toggle, Collapse } = Navbar;
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Brand>QRCode Generator</Brand>
        </Container>
      </Navbar>
      <QRCode />
    </Container>
  );
}
