import React, { Component } from "react"

import Page from "./Page"
import { Link } from "react-router-dom"
import api from "../services/api"

import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"

export default class HomeDoador extends Component {
  state = {
    itensDoados: [
      { id: "1", titulo: "Celular Moto G4" },
      { id: "2", titulo: "Tablet Samsung Galaxy Tab 7" },
      { id: "3", titulo: "Netbook LG X140" },
    ],
  }

  componentDidMount() {
    this.carregarItensDoados()
  }

  carregarItensDoados = async () => {
    //const response = await api.get("/URL")
    //this.setState({itensDoados: Response.data.docs})
  }

  render() {
    return (
      <Page title="Perfil">
        <header className="header-interno">
          <h4>Bem-vindo, Daniel!</h4>
        </header>

        <div className="conteudo-interno">
          <div className="mb-3">
            <h6>Suas doações:</h6>
            <ListGroup>
              {this.state.itensDoados.map((itemDoado) => (
                <ListGroup.Item key={itemDoado.id} action>
                  {itemDoado.titulo}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <Button to={"/fazer-acao-bem"} as={Link}>
            Fazer doação
          </Button>
        </div>
      </Page>
    )
  }
}
