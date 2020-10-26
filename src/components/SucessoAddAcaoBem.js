import React, { Component } from "react";

import Page from "./Page";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function SucessoAddAcaoBem(props) {
  return (
    <Page title="Obrigado!">
      <header className="header-interno">
        <h4>Obrigado, {localStorage.getItem("nomeUsuarioDoaTec")}! :D</h4>
      </header>
      <div className="main-interno">
        <p>
          Pronto! Seu pedido de doação foi registrado e está aguardando um
          doador que possa oferecer o que você precisa! Esperamos que dê tudo
          certo. Obrigado!
        </p>
        <Button to={"/nova-acao-bem"} as={Link}>
          Solicitar outro equipamento
        </Button>
      </div>
    </Page>
  );
}

export default SucessoAddAcaoBem;
