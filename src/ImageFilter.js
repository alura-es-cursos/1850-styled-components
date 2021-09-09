import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono } from "./Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <Icono src={alimentacion} alt="Restaurante" />,
    Salud: <Icono src={salud} alt="Salud" />,
    Transporte: <Icono src={transporte} alt="Transporte" />,
    Utilidades: <Icono src={utilidades} alt="Utilidades" />,
    default: <Icono src={otros} alt="Otros" />,
  };

  return Images[type] || Images["default"];
};
