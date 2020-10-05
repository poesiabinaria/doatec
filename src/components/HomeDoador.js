import React, { Component } from "react"

import Page from "./Page"
import { Link } from "react-router-dom"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default class HomeDoador extends Component {
  render() {
    return (
      <Page title="Perfil">
        <header className="header-interno">
          <h4>Bem-vindo, Daniel!</h4>
        </header>

        <div className="conteudo-interno">
          <div className="mb-3">
            <h6>Suas doações:</h6>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Celular Moto G4
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Tablet Samsung Galaxy Tab 7
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Netbook LG X140
              </ListGroup.Item>
            </ListGroup>
          </div>
          <Button to={"/fazer-acao-bem"} as={Link}>
            Fazer doação
          </Button>
        </div>
      </Page>
    )
  }
}
