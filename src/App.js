import React, { useState } from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Header from "./components/Header"

import HomeVisitante from "./components/HomeVisitante"
import Home from "./components/Home"
import CadastrarDoador from "./components/CadastrarDoador"
import CadastrarInstituicao from "./components/CadastrarInstituicao"
import AddAcaoBem from "./components/AddAcaoBem"
import FazerAcaoBem from "./components/FazerAcaoBem"
import SucessoFazerAcaoBem from "./components/SucessoFazerAcaoBem"
import Match from "./components/Match"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function App() {
  const [logado, setLogado] = useState(false)
  const [ehDoador, setEhDoador] = useState(true)
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xl="4" className="p-0">
            <div id="bg-lateral" className="bg-azul">
              <div className="area-titulo p-4">
                <h1>
                  <div className="texto-bg-branco text-lowercase">Doe ❤</div>
                </h1>
                <h1>
                  <div className="texto-bg-branco text-lowercase">
                    Ajude a educar!
                  </div>
                </h1>
              </div>

              <div className="area-manchete-estudante p-4">
                <h4 className="texto-bg-branco text-uppercase">
                  Glória Dayane, 13 anos
                </h4>
                <div>
                  <div className="texto-bg-branco">
                    "Vou poder estudar igual aos outros."
                  </div>
                </div>
                <div>
                  <div className="font-weight-bold">
                    Graças a uma doadora de Salvador (BA), Dayane recebeu um
                    celular na pandemia e vai poder estudar como seus colegas.
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={{ offset: 0 }}></Col>

          <Col xl={6}>
            <Header logado={logado} setLogado={setLogado} />

            <Container>
              <div className="container-padrao p-5">
                <Switch>
                  <Route exact path="/">
                    {logado ? <Home ehDoador={ehDoador} /> : <HomeVisitante />}
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
  )
}

export default App
