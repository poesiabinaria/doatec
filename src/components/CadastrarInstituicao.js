import React, { Component } from "react"

import Page from "./Page"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default class CadastrarInstituicao extends Component {
  render() {
    return (
      <Page title="Cadastre-se como uma instituição">
        <header className="header-interno">
          <h5>Cadastre-se como uma instituição</h5>
        </header>

        <div className="conteudo-interno">
          <Row>
            <Col lg="6">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Nome da instituiçao" />
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
