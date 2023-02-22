import React from "react";
import logo from "../../assets/logo.svg";
import bars from "../../assets/bars.svg";
import xmark from "../../assets/xmark.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, MenuDropdownSt } from "./styles";
import Button from "../Button";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavLinks = () => setIsOpen(!isOpen);

  const history = useNavigate();

  return (
    <Container>
      <MenuDropdownSt>
        <img src={logo} alt="Motors Shop" />
        {isOpen ? (
          <img src={xmark} onClick={handleNavLinks} />
        ) : (
          <img src={bars} onClick={handleNavLinks} />
        )}

        <nav className={`${isOpen ? "open" : "close"}`}>
          <ul>
            <li>
              <a href="#carros">Carros</a>
            </li>
            <li>
              <a href="#motos">Motos</a>
            </li>
            <li>
              <a href="#leilao">Leilão</a>
            </li>
            <li>
              <a href="/login">Fazer Login</a>
            </li>
            <li>
              <Button
                backgroundColor={"--color-whiteFixed"}
                backgroundColorHover="--color-grey8"
                border={"--color-grey4"}
                fontColor="--color-grey0"
              >
                Cadastrar
              </Button>
              {/* <button onClick={() => history("/register")}>Cadastrar</button> */}
            </li>
          </ul>
        </nav>
      </MenuDropdownSt>
    </Container>
  );
};

export default MenuDropdown;