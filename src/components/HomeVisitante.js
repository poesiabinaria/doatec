import React, { Component, useState } from "react"

import Page from "./Page"
import { Link } from "react-router-dom"
import api from "../services/api"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function HomeVisitante() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await api.post("URL DO SERVIDOR", {
        email,
        senha,
      })
      console.log(response.data)
    } catch (e) {
      console.log("Erro")
    }
  }

  return (
    <Page title="Início">
      <Row>
        <Col xl="6">
          <header className="header-interno">
            <p className="mt-4 texto-lema">
              <b>Educar</b> é permitir que <b>todos partam da mesma linha</b>.
              Doe dispositivos tecnológicos e torne justa essa largada!
            </p>
          </header>
        </Col>

        <Col xl="6">
          <div id="box-login" className="mb-4">
            <h6 className="mb-3 titulo-secao">Login</h6>
            <Form onSubmit={handleSubmit}>
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
                  label="kl"
                />
              </Form.Group>

              <Button type="submit" to={"/perfil"} as={Link} block>
                Entrar
              </Button>
            </Form>
          </div>

          <div id="box-cadastre">
            <h6 className="mb-3 titulo-secao">Cadastre-se</h6>
            <Button as={Link} to="/cadastrar/doador" block>
              Quero doar
            </Button>

            <Button as={Link} to="/cadastrar/instituicao" block>
              Sou uma instituição
            </Button>
          </div>
        </Col>
      </Row>
    </Page>
  )
}

export default HomeVisitante
