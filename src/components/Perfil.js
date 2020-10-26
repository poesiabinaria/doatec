import React from "react";

import PerfilDoador from "./PerfilDoador";
import PerfilInstituicao from "./PerfilInstituicao";

function Perfil(props) {
  if (props.ehDoador) {
    return <PerfilDoador />;
  }
  return <PerfilInstituicao />;
}

export default Perfil;
