import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function CardNotificacoes(props) {
  const [exibirNotificacao, setExibirNotificacao] = useState(true);

  return props.mensagens.map((itemNotificacao, index) => {
    setTimeout(() => {
      setExibirNotificacao(false);
    }, 2000);
    return (
      <Alert
        key={index}
        variant={itemNotificacao.tipo}
        show={exibirNotificacao}
      >
        {itemNotificacao.msg}
      </Alert>
    );
  });
}

export default CardNotificacoes;
