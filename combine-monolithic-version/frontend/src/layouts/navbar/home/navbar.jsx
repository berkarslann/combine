import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MainContainer, ButtonContainer, Button, Contribute } from "./styles";

const HomeNavbar = () => {
  return (
    <MainContainer>
    <Link to='/'>
      <img src={logo} alt="Description of the image" style={{ width: "80%", height: "auto" }} />
      </Link>
      <ButtonContainer>
        <Contribute>katkı sağla</Contribute>
        <Contribute>hakkında</Contribute>
        <Link to="/login">
          <Button>giriş yap</Button>
        </Link>
      </ButtonContainer>
    </MainContainer>
  );
};

export default HomeNavbar;
