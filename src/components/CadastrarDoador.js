import React, { Component } from "react"

import Page from "./Page"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default class CadastrarDoador extends Component {
  render() {
    return (
      <Page title="Cadastre-se como um doador">
        <header className="header-interno">
          <h4>Cadastre-se como um doador</h4>
        </header>

        <div className="conteudo-interno">
          <Row>
            <Col lg="6">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Seu nome completo" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>

                <Button type="submit">Cadastrar</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Page>
    )
  }
}
