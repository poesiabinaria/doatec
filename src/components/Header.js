import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import HeaderLogado from "./HeaderLogado";

import logoDoaTec from "../img/logo-doatec.svg";

function Header(props) {
  return (
    <header id="header" className="mb-5">
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img id="logo-doatec" src={logoDoaTec} alt="Logo DoaTec"></img>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            {props.logado ? (
              <HeaderLogado setLogado={props.setLogado} />
            ) : (
              false
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
