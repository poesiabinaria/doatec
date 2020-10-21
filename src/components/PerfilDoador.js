import React, { useEffect, useState } from "react";

import Page from "./Page";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function HomeDoador(props) {
  //const { idUsuario } = useParams();

  const [carregado, setCarregado] = useState(false);
  const [itensDoados, setItensDoados] = useState([
    {
      inputTituloEquip: "...",
      inputDescrEquip: "...",
    },
  ]);

  useEffect(() => {
    async function carregarItensDoados() {
      try {
        let idUsuario = localStorage.getItem("idUsuarioDoaTec");
        console.log("O ID: ", idUsuario);
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
        <div className="conteudo-interno">
          {itensDoados.length ? (
            <div className="itens-equipamento">
              {itensDoados.map((itemDoado) => (
                <div className="item-equipamento py-3" key={itemDoado.id}>
                  <div className="text-capitalize font-weight-bold mb-1">
                    {itemDoado.radioTipoEquip}
                  </div>
                  <div className="small">{itemDoado.inputDescrEquip}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              Você não tem itens doados. Clique no botão abaixo para doar!
            </div>
          )}
        </div>
      ) : (
        <div>Carregando...</div>
      )}

      <Button className="mt-4" to={"/fazer-acao-bem"} as={Link}>
        Fazer doação
      </Button>
    </Page>
  );
}

export default HomeDoador;
