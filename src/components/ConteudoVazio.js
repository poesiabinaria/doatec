import React from "react";
import logoDoaTecCinza from "../img/logo-doatec-cinza.png";

const ConteudoVazio = () => {
  return (
    <div className="container-sem-conteudo text-center mb-4">
      <div className="imagem">
        <img src={logoDoaTecCinza} alt="" />
        <div className="texto font-weight-bold">Ainda não há nada aqui!</div>
      </div>
    </div>
  );
};

export default ConteudoVazio;
