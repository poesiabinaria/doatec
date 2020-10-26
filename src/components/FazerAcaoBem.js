import React, { useState } from "react";

import Page from "./Page";
import { withRouter } from "react-router-dom";
import api from "../services/api";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FazerAcaoBem(props) {
  const [radioTipoEquip, setRadioTipoEquip] = useState("");

  const [radioEscala, setRadioEscala] = useState("");

  const [inputTituloEquip, setInputTituloEquip] = useState("");
  const [inputProblEquip, setInputProblEquip] = useState("");
  const [inputReparoEquip, setInputReparoEquip] = useState("");
  const [inputDescrEquip, setInputDescrEqui] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({
      radioTipoEquip,
      radioEscala,
      inputProblEquip,
      inputReparoEquip,
      inputDescrEquip,
    });

    try {
      const response = await api.post("/devices", {
        radioTipoEquip,
        radioEscala,
        inputTituloEquip,
        inputProblEquip,
        inputReparoEquip,
        inputDescrEquip,
        user_id: localStorage.getItem("idUsuarioDoaTec"),
      });
      console.log(response.data);
      props.history.push("/acao-bem-enviada");
    } catch (e) {
      console.log("Erro");
    }
  }

  return (
    <Page title="Faça uma ação do bem">
      <header className="header-interno">
        <h4> Faça uma ação do bem </h4>
      </header>

      <div className="main-interno">
        <Form onSubmit={handleSubmit}>
          <Form.Group onChange={(e) => setRadioTipoEquip(e.target.value)}>
            <Form.Label>O que você tem para doar agora?</Form.Label>
            <Form.Check
              required
              name="radioEquipamento"
              type="radio"
              id="checkComputador"
              label="Computador"
              value="computador"
            />
            <Form.Check
              required
              name="radioEquipamento"
              type="radio"
              id="checkTablet"
              label="Tablet"
              value="tablet"
            />
            <Form.Check
              required
              name="radioEquipamento"
              type="radio"
              id="checkCelular"
              label="Celular"
              value="celular"
            />
          </Form.Group>

          <Form.Group onChange={(e) => setRadioEscala(e.target.value)}>
            <Form.Label>
              Numa escala de 1 a 5, quão bem este equipamento funciona?
            </Form.Label>
            <div>
              <Form.Check
                required
                name="escala"
                type="radio"
                label="1"
                value="1"
                inline
              />
              <Form.Check
                required
                name="escala"
                type="radio"
                label="2"
                value="2"
                inline
              />
              <Form.Check
                required
                name="escala"
                type="radio"
                label="3"
                value="3"
                inline
              />
              <Form.Check
                required
                name="escala"
                type="radio"
                label="4"
                value="4"
                inline
              />
              <Form.Check
                required
                name="escala"
                type="radio"
                label="5"
                value="5"
                inline
              />
            </div>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group required>
            <Form.Label>Título do Equipamento</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setInputTituloEquip(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Existe algum problema com ele? Se sim, descreva
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setInputProblEquip(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              O equipamento precisa de algum reparo? Comente
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setInputReparoEquip(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Descrição do equipamento</Form.Label>
            <Form.Control
              required
              as="textarea"
              onChange={(e) => setInputDescrEqui(e.target.value)}
            />
          </Form.Group>

          <Button type="submit"> Doar! </Button>
        </Form>
      </div>
    </Page>
  );
}

export default withRouter(FazerAcaoBem);
