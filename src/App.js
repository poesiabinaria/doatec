import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import BannerLateral from "./components/BannerLateral";

import HomeVisitante from "./components/HomeVisitante";
import Perfil from "./components/Perfil";
import CadastrarDoador from "./components/CadastrarDoador";
import CadastrarInstituicao from "./components/CadastrarInstituicao";
import AddAcaoBem from "./components/AddAcaoBem";
import FazerAcaoBem from "./components/FazerAcaoBem";
import SucessoFazerAcaoBem from "./components/SucessoFazerAcaoBem";
import CardNotificacoes from "./components/CardNotificacoes";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [logado, setLogado] = useState(
    Boolean(localStorage.getItem("idUsuarioDoaTec"))
  );
  const [ehDoador, setEhDoador] = useState(
    localStorage.getItem("roleUsuarioDoaTec") === "DOADOR"
  );

  const [mensagens, setMensagens] = useState([]);

  function addMensagem(msg, tipo) {
    setMensagens([...mensagens, { msg, tipo }]);
  }

  function yourHandler() {
    console.log("oi");
    setMensagens([]);
  }

  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xl={4} lg={4} className="p-0 d-none d-lg-block d-xl-block">
            <BannerLateral />
          </Col>

          <Col xl={{ span: 6, offset: 1 }} lg={8}>
            <Header logado={logado} setLogado={setLogado} />

            <Container>
              <div className="container-central p-5">
                <CardNotificacoes mensagens={mensagens} />

                <Switch>
                  <Route exact path="/" onChange={() => yourHandler()}>
                    {logado ? (
                      <Perfil ehDoador={ehDoador} />
                    ) : (
                      <HomeVisitante
                        setLogado={setLogado}
                        setEhDoador={setEhDoador}
                      />
                    )}
                  </Route>

                  <Route path="/cadastrar/doador">
                    <CadastrarDoador addMensagem={addMensagem} />
                  </Route>

                  <Route path="/cadastrar/instituicao">
                    <CadastrarInstituicao addMensagem={addMensagem} />
                  </Route>

                  <Route path="/fazer-acao-bem">
                    <FazerAcaoBem />
                  </Route>

                  <Route path="/nova-acao-bem">
                    <AddAcaoBem />
                  </Route>

                  <Route path="/acao-bem-enviada">
                    <SucessoFazerAcaoBem />
                  </Route>
                </Switch>
              </div>
            </Container>
          </Col>

          <Col xl={{ offset: 0 }}></Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
