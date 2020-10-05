import React, { Component, useState } from "react"

import HomeDoador from "./HomeDoador"
import HomeInstituicao from "./HomeInstituicao"

function Home(props) {
  const ehDoador = props.ehDoador

  if (ehDoador) {
    return <HomeDoador />
  }
  return <HomeInstituicao />
}

export default Home
