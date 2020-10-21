import React, { Component, useState } from "react";

import PerfilDoador from "./PerfilDoador";
import PerfilInstituicao from "./PerfilInstituicao";

function Perfil(props) {
  if (props.ehDoadors) {
    return <PerfilDoador />;
  }
  return <PerfilInstituicao />;
}

export default Perfil;
