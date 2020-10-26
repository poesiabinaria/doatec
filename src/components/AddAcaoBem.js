import React, { useState } from "react";

import Page from "./Page";
import api from "../services/api";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddAcaoBem() {
  const [checkComputador, setCheckComputador] = useState(false);
  const [checkTablet, setCheckTablet] = useState(false);
  const [checkCelular, setCheckCelular] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("actions", {
        checkComputador,
        checkTablet,
        checkCelular,
        user_id: localStorage.getItem("idUsuarioDoaTec"),
      });
      console.log(response.data);
    } catch (e) {
      console.log("Erro");
    }
  }

  return (
    <Page title="Adicione uma ação do bem">
      <header className="header-interno">
        <h4>Adicione uma ação do bem</h4>
      </header>

      <div className="main-interno">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>
              Selecione o que você precisa. Vamos tentar encontrar um doador!
            </Form.Label>
            <Form.Check
              name="checkComputador"
              value="computador"
              type="checkbox"
              id="checkComputador"
              label="Computador"
              onChange={(e) => setCheckComputador(e.target.checked)}
            />
            <Form.Check
              name="checkTablet"
              value="tablet"
              type="checkbox"
              id="checkTablet"
              label="Tablet"
              onChange={(e) => setCheckTablet(e.target.checked)}
            />
            <Form.Check
              name="checkCelular"
              value="celular"
              type="checkbox"
              id="checkCelular"
              label="Celular"
              onChange={(e) => setCheckCelular(e.target.checked)}
            />
          </Form.Group>

          <Button type="submit">Adicionar</Button>
        </Form>
      </div>
    </Page>
  );
}

export default AddAcaoBem;
