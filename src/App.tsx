import React from "react";
import QRCode from "./Components/QRCode";
import Nav from "./Components/Nav";
import Greeting from "./Components/Greeting";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Nav />
      <Greeting />
      <QRCode />
    </>
  );
}
