import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import BannerLateral from "./components/BannerLateral";

import HomeVisitante from "./components/HomeVisitante";
import Perfil from "./components/Perfil";
import PerfilDoador from "./components/PerfilDoador";
import PerfilInstituicao from "./components/PerfilInstituicao";
import CadastrarDoador from "./components/CadastrarDoador";
import CadastrarInstituicao from "./components/CadastrarInstituicao";
import AddAcaoBem from "./components/AddAcaoBem";
import FazerAcaoBem from "./components/FazerAcaoBem";
import SucessoFazerAcaoBem from "./components/SucessoFazerAcaoBem";
import Match from "./components/Match";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [logado, setLogado] = useState(
    Boolean(localStorage.getItem("idUsuarioDoaTec"))
  );
  const [ehDoador, setEhDoador] = useState(
    localStorage.getItem("roleUsuarioDoaTec") == "DOADOR"
  );

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
              <div className="container-padrao p-5">
                <Switch>
                  <Route exact path="/">
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
                    <CadastrarDoador />
                  </Route>

                  <Route path="/cadastrar/instituicao">
                    <CadastrarInstituicao />
                  </Route>

                  <Route path="/fazer-acao-bem">
                    <FazerAcaoBem />
                  </Route>

                  <Route path="/perfil/:id">
                    {ehDoador ? <PerfilDoador /> : <PerfilInstituicao />}
                  </Route>

                  <Route path="/nova-acao-bem">
                    <AddAcaoBem />
                  </Route>

                  <Route path="/acao-bem-enviada">
                    <SucessoFazerAcaoBem />
                  </Route>

                  <Route path="/match">
                    <Match />
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
