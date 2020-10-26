import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginacao = ({ itensPorPagina, totalItens, paginar }) => {
  const colecaoNumerosPagina = [];

  for (let i = 1; i <= Math.ceil(totalItens / itensPorPagina); i++) {
    colecaoNumerosPagina.push(i);
  }

  return (
    <Pagination>
      {colecaoNumerosPagina.map((numeroPagina) => (
        <Pagination.Item
          key={numeroPagina}
          onClick={() => paginar(numeroPagina)}
        >
          {numeroPagina}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Paginacao;
