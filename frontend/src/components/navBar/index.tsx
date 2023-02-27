import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import logo from "../../assets/logo.svg";

import MobileMenu from "../MobileMenu";
import Dropdown from "../Dropdown";
import { DivNavBar, DivNavBarUser, Nav } from "./styles";

export const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@user:token");

  return token ? (
    <>
      <Nav>
        <figure onClick={() => navigate("/home", { replace: true })}>
          <img src={logo} alt="logo da empresa" />
        </figure>
        <div className="navbar-teste">
          <DivNavBar>
            <a href="#Carros">Carros</a>
            <a href="#Motos">Motos</a>
            <a href="#Leilão">Leilão</a>
          </DivNavBar>
          <Dropdown />
        </div>
      </Nav>
      <MobileMenu />
    </>
  ) : (
    <>
      <Nav>
        <figure onClick={() => navigate("/home", { replace: true })}>
          <img src={logo} alt="logo da empresa" />
        </figure>
        <div className="navbar-teste">
          <DivNavBar>
            <a href="#Carros">Carros</a>
            <a href="#Motos">Motos</a>
            <a href="#Leilão">Leilão</a>
          </DivNavBar>

          <DivNavBarUser>
            <span onClick={() => navigate("/login", { replace: true })}>
              Fazer login
            </span>
            <Button
              backgroundColor="#ffffff"
              backgroundColorHover="#212529"
              border="#212529"
              fontColor="#212529"
              fontColorHover="#ffffff"
              onClick={() => navigate("/register", { replace: true })}
            >
              Cadastrar
            </Button>
          </DivNavBarUser>
        </div>
      </Nav>
      <MobileMenu />
    </>
  );
};

export default NavBar;
