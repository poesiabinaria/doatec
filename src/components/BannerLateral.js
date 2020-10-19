import React, { Component } from "react";

export default class BannerLateral extends Component {
  render() {
    return (
      <div id="bg-lateral" className="bg-azul">
        <div className="area-titulo p-4">
          <h1>
            <div className="texto-bg-branco text-lowercase">Doe ❤</div>
          </h1>
          <h1>
            <div className="texto-bg-branco text-lowercase">
              Ajude a educar!
            </div>
          </h1>
        </div>

        <div className="area-manchete-estudante p-4">
          <h4 className="texto-bg-branco text-uppercase">
            Glória Dayane, 13 anos
          </h4>
          <div>
            <div className="texto-bg-branco">
              "Vou poder estudar igual aos outros."
            </div>
          </div>
          <div>
            <div className="font-weight-bold">
              Graças a uma doadora de Salvador (BA), Dayane recebeu um celular
              na pandemia e vai poder estudar como seus colegas.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
