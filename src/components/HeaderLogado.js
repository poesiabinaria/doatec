import React from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function HeaderLogado(props) {
  function handleDeslogar() {
    props.setLogado(false);

    localStorage.removeItem("idUsuarioDoaTec");
    localStorage.removeItem("roleUsuarioDoaTec");
    localStorage.removeItem("nomeUsuarioDoaTec");
  }
  return (
    <Form inline>
      <Dropdown>
        <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
          {localStorage.getItem("nomeUsuarioDoaTec")}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item to="/" as={Link}>
            Meu perfil
          </Dropdown.Item>
          <Dropdown.Item onClick={handleDeslogar}>Sair</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
}

export default HeaderLogado;
