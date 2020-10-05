import React, { Component, useState } from "react"
import { Link } from "react-router-dom"

import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"

function HeaderLogado(props) {
  return (
    <Form inline>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">Instituto Semear</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item to="/perfil" as={Link}>
            Meu perfil
          </Dropdown.Item>
          <Dropdown.Item to="/" as={Link}>
            Sair
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  )
}

export default HeaderLogado
