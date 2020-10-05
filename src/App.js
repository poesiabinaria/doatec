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

function App() {
  const [logado, setLogado] = useState(true)
  const [ehDoador, setEhDoador] = useState(false)
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  )
}

export default App
