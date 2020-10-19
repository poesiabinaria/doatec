import React, { Component } from "react";

import Page from "./Page";
import { Link } from "react-router-dom";
import api from "../services/api";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default class HomeInstituicao extends Component {
  state = {
    itensSolicitados: [
      { id: "1", titulo: "Computador" },
      { id: "2", titulo: "Tablet" },
    ],
  };

  componentDidMount() {
    this.carregarItensSolicitados();
  }

  carregarItensSolicitados = async () => {
    //const response = await api.get("/URL")
    //this.setState({itensSolicitados: Response.data.docs})
  };
  render() {
    return (
      <Page title="Meu perfil">
        <header className="header-interno">
          <h4>Olá, {localStorage.getItem("nomeUsuarioDoaTec")}!</h4>
        </header>

        <div className="conteudo-interno">
          <div className="mb-3">
            <h6>Seus pedidos de doação:</h6>
            <ListGroup>
              {this.state.itensSolicitados.map((itemSolicitado) => (
                <ListGroup.Item key={itemSolicitado.id} action>
                  {itemSolicitado.titulo}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <Button to={"/nova-acao-bem"} as={Link}>
            Solicitar doação
          </Button>
        </div>
      </Page>
    );
  }
}
