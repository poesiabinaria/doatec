import React, { Component } from "react"

import Page from "./Page"
import { Link } from "react-router-dom"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default class FazerAcaoBem extends Component {
  render() {
    return (
      <Page title="Faça uma ação do bem">
        <header className="header-interno">
          <h4>Faça uma ação do bem</h4>
        </header>

        <div className="conteudo-interno">
          <Row>
            <Col>
              <h6>O que você tem para doar?</h6>
              <Form.Group as={Row} controlId="">
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="checkComputador"
                    label="Computador"
                  />
                  <Form.Check type="checkbox" id="checkTablet" label="Tablet" />
                  <Form.Check
                    type="checkbox"
                    id="checkCelular"
                    label="Celular"
                  />
                  <Form.Check type="checkbox" id="checkOutro" label="Outro" />
                </Col>
              </Form.Group>

              <h6>Numa escala de 1 a 5, quão bem este equipamento funciona?</h6>
              <Form.Group as={Row} controlId="">
                <Col>
                  <Form.Check inline type="checkbox" id="" label="1" />
                  <Form.Check inline type="checkbox" id="" label="2" />
                  <Form.Check inline type="checkbox" id="" label="3" />
                  <Form.Check inline type="checkbox" id="" label="4" />
                  <Form.Check inline type="checkbox" id="" label="5" />
                </Col>
              </Form.Group>

              <h6>Existe algum problema com o equipamento? Se sim, descreva</h6>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <h6>O equipamento precisa de algum reparo? Comente</h6>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <h6>Envie uma imagem do equipamento</h6>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" />
              </Form.Group>

              <h6>Descrição do equipamento</h6>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button type="submit" to={"/acao-bem-enviada"} as={Link}>
                Doar!
              </Button>
            </Col>
          </Row>
        </div>
      </Page>
    )
  }
}
