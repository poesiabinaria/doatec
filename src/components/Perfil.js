import React, { Component, useState } from "react";

import PerfilDoador from "./PerfilDoador";
import PerfilInstituicao from "./PerfilInstituicao";

function Perfil(props) {
  const ehDoador = props.ehDoador;

  if (ehDoador) {
    return <PerfilDoador />;
  }
  return <PerfilInstituicao />;
}

export default Perfil;
