import React, { useState, useEffect } from "react";

import Page from "./Page";
import { Link } from "react-router-dom";
import api from "../services/api";

import Button from "react-bootstrap/Button";
import loaderAnimado from "../img/loader-doatec.svg";
import Paginacao from "./Paginacao";
import ConteudoVazio from "./ConteudoVazio";

function PerfilInstituicao() {
  const [carregado, setCarregado] = useState(false);
  const [colecaoMatches, setColecaoMatches] = useState([]);

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina] = useState(2);

  // Paginação:
  const indexUltimoItem = paginaAtual * itensPorPagina;
  const indexPrimeiroItem = indexUltimoItem - itensPorPagina;
  const itensAtuais = colecaoMatches.slice(indexPrimeiroItem, indexUltimoItem);
  const paginar = (numeroPagina) => setPaginaAtual(numeroPagina);

  useEffect(() => {
    async function carregarMatches() {
      try {
        let idUsuario = localStorage.getItem("idUsuarioDoaTec");
        console.log("O ID AQUI: ", idUsuario);
        const response = await api.get(`/matches/user/23`);
        console.log(response.data);

        const arrayIntermediario = response.data.map((itemMatch) => {
          return {
            dadosDoador: {
              idDoador: itemMatch.device_user_id,
              nomeDoador: itemMatch.device.user.name,
              emailDoador: itemMatch.device.user.email,
            },
            id: itemMatch.id,
            tipoEquip: itemMatch.device.radioTipoEquip,
            tituloEquip: itemMatch.device.inputTituloEquip,
            descrEquip: itemMatch.device.inputDescrEquip,
            problEquip: itemMatch.device.inputProblEquip,
            reparoEquip: itemMatch.device.inputReparoEquip,
            escalaEquip: itemMatch.device.radioEscala,
          };
        });
        setColecaoMatches([...colecaoMatches, ...arrayIntermediario]);
        setCarregado(true);
      } catch (e) {
        console.log("Erro ", e.response);
      }
    }
    carregarMatches();
  }, []);

  return (
    <Page title="Meu perfil">
      <header className="header-interno">
        <h3>Olá, {localStorage.getItem("nomeUsuarioDoaTec")}!</h3>
        <p>Doações disponíveis para sua instituição:</p>
      </header>

      {carregado ? (
        <div className="main-interno my-3">
          {colecaoMatches.length ? (
            <div className="itens-lista">
              {itensAtuais.map((itemMatch) => (
                <div className="item-lista p-3 my-3" key={itemMatch.id}>
                  <div>
                    <b>{itemMatch.dadosDoador.nomeDoador}</b> tem um{" "}
                    {itemMatch.tipoEquip} disponível para sua instituição!
                  </div>
                  <div>
                    Email do doador: <b>{itemMatch.dadosDoador.emailDoador}</b>
                  </div>
                  <div className="sobre-equipamento mt-2 small">
                    <div className="font-weight-bold">
                      {itemMatch.tituloEquip}
                    </div>
                    <div>{itemMatch.descrEquip}</div>
                    <div>
                      - Estado do equipamento (0 a 5): {itemMatch.escalaEquip}
                    </div>
                    <div> - {itemMatch.problEquip}</div>
                    <div> - {itemMatch.reparoEquip}</div>
                  </div>
                </div>
              ))}
              <Paginacao
                itensPorPagina={itensPorPagina}
                totalItens={colecaoMatches.length}
                paginar={paginar}
              />
            </div>
          ) : (
            <ConteudoVazio />
          )}
        </div>
      ) : (
        <div className="text-center">
          <img src={loaderAnimado} /> Carregando...
        </div>
      )}

      <footer className="footer-interno pt-4 mt-4">
        <Button to={"/nova-acao-bem"} as={Link}>
          Solicitar doação
        </Button>
      </footer>
    </Page>
  );
}

export default PerfilInstituicao;

// 27 doador 1
// 28 instituicao 1
