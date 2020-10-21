import React, { Component } from "react";

import Page from "./Page";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default class HomeDoador extends Component {
  state = {
    itensDoados: [],
    idUusario: localStorage.getItem("idUsuarioDoaTec"),
  };

  componentDidMount() {
    this.carregarItensDoados();
  }

  carregarItensDoados = async () => {
    try {
      let idUsuario = await localStorage.getItem("idUsuarioDoaTec");
      console.log("O ID: ", idUsuario);
      const response = await api.get(`/devices/user/${idUsuario}`);

      this.setState({ itensDoados: response.data });

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
          <p>Suas doações:</p>
        </header>

        <div className="conteudo-interno">
          <div className="itens-equipamento">
            {this.state.itensDoados.map((itemDoado) => (
              <div className="item-equipamento py-3" key={itemDoado.id}>
                <div className="text-capitalize font-weight-bold mb-1">
                  {itemDoado.radioTipoEquip}
                </div>
                <div className="small">{itemDoado.inputDescrEquip}</div>
              </div>
            ))}
          </div>

          <Button className="mt-4" to={"/fazer-acao-bem"} as={Link}>
            Fazer doação
          </Button>
        </div>
      </Page>
    );
  }
}
