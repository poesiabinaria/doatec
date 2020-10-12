import React, { useState, Component } from "react"

import Page from "./Page"
import api from "../services/api"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function CadastrarInstituicao() {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  async function handleSubmit(e) {
    e.preventDefault()

    console.log(nome)
    try {
      const response = await api.post("URL DO SERVIDOR", {
        nome,
        email,
        senha,
      })
      console.log(response.data)
    } catch (e) {
      console.log("Erro")
    }
  }

  return (
    <Page title="Cadastre-se como uma instituição">
      <header className="header-interno">
        <h4>Cadastre-se como uma instituição</h4>
      </header>

      <div className="conteudo-interno">
        <Row>
          <Col lg="8">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Nome da instituiçao"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={(e) => setSenha(e.target.value)}
                  type="password"
                  placeholder="Senha"
                />
              </Form.Group>

              <Button type="submit">Cadastrar</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Page>
  )
}

export default CadastrarInstituicao
