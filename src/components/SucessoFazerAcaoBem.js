import React, { Component } from "react"

import Page from "./Page"
import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default class SucessoFazerAcaoBem extends Component {
  render() {
    return (
      <Page title="Obrigado!">
        <header className="header-interno">
          <h4>Obrigado!</h4>
        </header>
        <div className="conteudo-interno">
          <h6>
            Pronto! Seu equipamento será analisado e, se for aprovado, será
            doado para alguma instituição cadastrada. Esperamos que dê tudo
            certo, Daniel! Obrigado! :D
          </h6>
          <Button to={"/fazer-acao-bem"} as={Link}>
            Doar outro equipamento
          </Button>
        </div>
      </Page>
    )
  }
}
