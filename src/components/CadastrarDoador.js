import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Page from "./Page";
import api from "../services/api";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CadastrarDoador(props) {
  const [name, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setSenha] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("auth/register", {
        name,
        email,
        password,
        role: "DOADOR",
      });
      console.log(response.data);
      props.addMensagem(
        "Cadastro feito com sucesso! Faça login para continuar.",
        "success"
      );
      props.history.push("/");
    } catch (e) {
      props.addMensagem("E-mail já cadastrado.", "danger");
      console.log("Erro");
    }
  }

  return (
    <Page title="Cadastre-se como um doador">
      <header className="header-interno">
        <h4> Cadastre-se como um doador </h4>
      </header>
      <div className="main-interno">
        <Row>
          <Col lg="6">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  required
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Seu nome completo"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  required
                  onChange={(e) => setSenha(e.target.value)}
                  type="password"
                  placeholder="Senha"
                />
              </Form.Group>
              <Button type="submit"> Cadastrar </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Page>
  );
}

export default withRouter(CadastrarDoador);
