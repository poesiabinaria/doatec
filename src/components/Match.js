import React, { Component } from "react"

import Page from "./Page"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import celExemplo from "../img/temp/celular-exemplo.jpg"

export default class Match extends Component {
  render() {
    return (
      <Page title="Encontramos um doador para sua instituição!">
        <header className="header-interno">
          <h4>Encontramos um doador para sua instituição!</h4>
        </header>

        <div className="conteudo-interno">
          <Row>
            <Col>
              <Row>
                <Col xl="3">
                  <img className="img-media" src={celExemplo} alt="" />
                </Col>
                <Col>
                  <p>
                    <b>Daniel</b> quer doar um celular!
                  </p>
                  <p>Converse com o doador para combinar a entrega.</p>

                  <Button type="submit">Falar com Daniel</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Page>
    )
  }
}
