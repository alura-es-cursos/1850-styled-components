import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <img className="imagen-icono" src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <div className="saldo">
            <span className="detalle">$</span> 8,621.50
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="imagen-icono"
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </button>
    </div>
  );
};

export default Account;
