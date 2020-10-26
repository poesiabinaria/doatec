import React, { useState } from "react";

import Page from "./Page";
import { Link } from "react-router-dom";
import api from "../services/api";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import maosCoracao from "../img/maos-coracao.png";

function HomeVisitante(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("auth/login", {
        email,
        password,
      });

      const dadosUsuario = response.data;
      //console.log(dadosUsuario);

      localStorage.setItem("idUsuarioDoaTec", dadosUsuario.id);
      localStorage.setItem("roleUsuarioDoaTec", dadosUsuario.role);
      localStorage.setItem("nomeUsuarioDoaTec", dadosUsuario.name);

      props.setLogado(true);

      if (dadosUsuario.role === "DOADOR") {
        props.setEhDoador(true);
      } else {
        props.setEhDoador(false);
      }
    } catch (e) {
      console.log("Erro: ", e.response);
      props.addMensagem(
        "E-mail ou senha incorretos. Tente novamente.",
        "danger"
      );
    }
  }

  return (
    <Page title="Início">
      <Row>
        <Col xl={6} lg={6}>
          <header className="header-interno">
            <div className="mt-4 texto-lema text-justify">
              <div className="text-center mb-4">
                <img id="maos-coracao" src={maosCoracao} alt="" />
              </div>
              <b>Educar</b> é permitir que <b>todos partam da mesma linha</b>.
              Doe dispositivos tecnológicos e <b>torne justa</b> essa largada!
            </div>
          </header>
        </Col>

        <Col xl={6} lg={6}>
          <div id="box-login" className="mb-4">
            <h6 className="mb-3 titulo-pequeno">Login</h6>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Senha"
                  label="kl"
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Entrar
              </Button>
            </Form>
          </div>

          <div id="box-cadastre">
            <h6 className="mb-3 titulo-pequeno">Cadastre-se</h6>
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
  );
}

export default HomeVisitante;
