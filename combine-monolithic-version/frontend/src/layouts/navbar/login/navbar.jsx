import React from "react";
import logo from '../../../assets/logo.png'
import { MainContainer } from "./styles";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <MainContainer>
      <Link to='/'>
      <img src={logo} alt="Logo Img" style={{ width: "90%", height: "auto" }} />
      </Link>
     

    </MainContainer>
  );
};

export default LoginNavbar;
