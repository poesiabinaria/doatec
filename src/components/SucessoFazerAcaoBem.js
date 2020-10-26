import React, { Component } from "react";

import Page from "./Page";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function SucessoFazerAcaoBem(props) {
  return (
    <Page title="Obrigado!">
      <header className="header-interno">
        <h4>Obrigado! :D</h4>
      </header>
      <div className="main-interno">
        <p>
          Pronto! Seu equipamento será analisado e, se for aprovado, será doado
          para alguma instituição cadastrada. Esperamos que dê tudo certo,{" "}
          {localStorage.getItem("nomeUsuarioDoaTec")}! Obrigado!
        </p>
        <Button to={"/fazer-acao-bem"} as={Link}>
          Doar outro equipamento
        </Button>
      </div>
    </Page>
  );
}

export default SucessoFazerAcaoBem;
