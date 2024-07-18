import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MainContainer, ButtonContainer, Button, Contribute } from "./styles";

const HomeNavbar = () => {
  return (
    <MainContainer>
      <Link to="/">
        <img
          src={logo}
          alt="Description of the image"
          style={{ width: "80%", height: "auto" }}
        />
      </Link>
      <ButtonContainer>
        <Link to="https://github.com/berkarslann/combine">
          <Contribute>katkı sağla</Contribute>
        </Link>
        <Link to="/about">
        <Contribute>hakkında</Contribute>
        </Link>
        <Link to="/signup">
          <Button>kaydol</Button>
        </Link>
        <Link to="/login">
          <Contribute>giriş yap</Contribute>
        </Link>
      </ButtonContainer>
    </MainContainer>
  );
};

export default HomeNavbar;
