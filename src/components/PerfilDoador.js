import React, { useEffect, useState } from "react";

import Page from "./Page";
import { Link } from "react-router-dom";
import api from "../services/api";

import Button from "react-bootstrap/Button";
import loaderAnimado from "../img/loader-doatec.svg";
import Paginacao from "./Paginacao";
import ConteudoVazio from "./ConteudoVazio";

function PerfilDoador() {
  const [carregado, setCarregado] = useState(false);
  const [itensDoados, setItensDoados] = useState([]);

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina] = useState(2);

  // Paginação:
  const indexUltimoItem = paginaAtual * itensPorPagina;
  const indexPrimeiroItem = indexUltimoItem - itensPorPagina;
  const itensAtuais = itensDoados.slice(indexPrimeiroItem, indexUltimoItem);
  const paginar = (numeroPagina) => setPaginaAtual(numeroPagina);

  useEffect(() => {
    async function carregarItensDoados() {
      try {
        let idUsuario = localStorage.getItem("idUsuarioDoaTec");
        const response = await api.get(`/devices/user/${idUsuario}`);

        setItensDoados(response.data);
        setCarregado(true);

        console.log(response.data);
      } catch (e) {
        console.log("Erro ", e.response);
      }
    }
    carregarItensDoados();
  }, []);

  return (
    <Page title="Meu perfil">
      <header className="header-interno">
        <h3>Olá, {localStorage.getItem("nomeUsuarioDoaTec")}!</h3>
        <p>Suas doações:</p>
      </header>

      {carregado ? (
        <div className="main-interno my-3">
          {itensDoados.length ? (
            <div className="itens-lista">
              {itensAtuais.map((itemDoado) => (
                <div key={itemDoado.id}>
                  <div className="item-lista p-3 my-3">
                    <div className="font-weight-bold">
                      {itemDoado.inputTituloEquip}
                    </div>
                    <div className="small">{itemDoado.inputDescrEquip}</div>
                  </div>
                </div>
              ))}
              <Paginacao
                itensPorPagina={itensPorPagina}
                totalItens={itensDoados.length}
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
        <Button to={"/fazer-acao-bem"} as={Link}>
          Fazer doação
        </Button>
      </footer>
    </Page>
  );
}

export default PerfilDoador;
