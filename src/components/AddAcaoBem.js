import React, { Component } from "react"

import Page from "./Page"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default class AddAcaoBem extends Component {
  render() {
    return (
      <Page title="Adicione uma ação do bem">
        <header className="header-interno">
          <h4>Adicione uma ação do bem</h4>
          <p>Selecione o que você precisa. Vamos tentar encontrar um doador</p>
        </header>

        <div className="conteudo-interno">
          <Form>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col>
                <Form.Check
                  type="checkbox"
                  id="checkComputador"
                  label="Computador"
                />
                <Form.Check type="checkbox" id="checkTablet" label="Tablet" />
                <Form.Check type="checkbox" id="checkCelular" label="Celular" />
                <Form.Check type="checkbox" id="checkOutro" label="Outro" />
              </Col>
            </Form.Group>
            <Button type="submit">Adicionar</Button>
          </Form>
        </div>
      </Page>
    )
  }
}
