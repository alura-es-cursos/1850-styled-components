import React from "react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="imagen-logo" src={logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ayuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Salir
        </a>
      </div>
    </div>
  );
};

export default Header;
