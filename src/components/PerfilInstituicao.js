import React, { Component } from "react";

import Page from "./Page";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default class HomeInstituicao extends Component {
  state = {
    itensSolicitados: [],
    idUusario: localStorage.getItem("idUsuarioDoaTec"),
  };

  componentDidMount() {
    this.carregarItensSolicitados();
  }

  carregarItensSolicitados = async () => {
    try {
      let idUsuario = await localStorage.getItem("idUsuarioDoaTec");
      console.log("O ID: ", idUsuario);
      const response = await api.get(`/devices/user/${idUsuario}`);

      this.setState({ itensSolicitados: response.data });

      console.log(response.data);
    } catch (e) {
      console.log("Erro ", e.response);
    }
  };

  render() {
    return (
      <Page title="Meu perfil">
        <header className="header-interno">
          <h3>Olá, {localStorage.getItem("nomeUsuarioDoaTec")}!</h3>

          <p>Seus pedidos de doação:</p>
        </header>

        <div className="conteudo-interno">
          <div className="itens-equipamento">
            {this.state.itensSolicitados.map((itemSolicitado) => (
              <div className="item-equipamento py-3" key={itemSolicitado.id}>
                <div className="text-capitalize font-weight-bold mb-1">
                  {itemSolicitado.radioTipoEquip}
                </div>
                <div className="small">{itemSolicitado.inputDescrEquip}</div>
              </div>
            ))}
          </div>

          <Button to={"/nova-acao-bem"} as={Link}>
            Solicitar doação
          </Button>
        </div>
      </Page>
    );
  }
}
