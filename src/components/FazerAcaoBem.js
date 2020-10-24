import React, { useState, Component } from "react";

import Page from "./Page";
import { withRouter } from "react-router-dom";
import SucessoFazerAcaoBem from "../components/SucessoFazerAcaoBem";
import { Link } from "react-router-dom";
import api from "../services/api";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FazerAcaoBem(props) {
  const [radioTipoEquip, setRadioTipoEquip] = useState("");

  const [radioEscala, setRadioEscala] = useState("");

  const [inputTituloEquip, setInputTituloEquip] = useState("");
  const [inputProblEquip, setInputProblEquip] = useState("");
  const [inputReparoEquip, setInputReparoEquip] = useState("");
  const [inputImgEquip, setInputImgEquip] = useState("");
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
        <h4> Faça uma ação do bem </h4>{" "}
      </header>
      <div className="conteudo-interno">
        <Form onSubmit={handleSubmit}>
          <h6> O que você tem para doar agora ? </h6>{" "}
          <Form.Group
            as={Row}
            onChange={(e) => setRadioTipoEquip(e.target.value)}
          >
            <Col>
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
              {/* <Form.Check
                              name="tipoEquipamento"
                              type="radio"
                              id="checkOutro"
                              label="Outro"
                              onChange={(e) => setCheckComputador(e.target.checked)}
                            /> */}{" "}
            </Col>{" "}
          </Form.Group>
          <h6> Numa escala de 1 a 5, quão bem este equipamento funciona ? </h6>{" "}
          <Form.Group as={Row} onChange={(e) => setRadioEscala(e.target.value)}>
            <Col>
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
            </Col>{" "}
          </Form.Group>
          <h6> Título do Euipamento </h6>{" "}
          <Form.Group>
            <Form.Control
              required
              type="text"
              rows={3}
              onChange={(e) => setInputTituloEquip(e.target.value)}
            />{" "}
          </Form.Group>
          <h6> Existe algum problema com ele ? Se sim, descreva </h6>{" "}
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setInputProblEquip(e.target.value)}
            />{" "}
          </Form.Group>
          <h6> O equipamento precisa de algum reparo ? Comente </h6>{" "}
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setInputReparoEquip(e.target.value)}
            />{" "}
          </Form.Group>
          {/* <h6> Envie uma imagem do equipamento </h6>{" "}
          <Form.Group>
            <Form.File onChange={(e) => setInputImgEquip(e.target.value)} />{" "}
          </Form.Group> */}
          <h6> Descrição do equipamento </h6>{" "}
          <Form.Group>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => setInputDescrEqui(e.target.value)}
            />{" "}
          </Form.Group>
          <Button type="submit"> Doar! </Button>{" "}
        </Form>{" "}
      </div>{" "}
    </Page>
  );
}

export default withRouter(FazerAcaoBem);
