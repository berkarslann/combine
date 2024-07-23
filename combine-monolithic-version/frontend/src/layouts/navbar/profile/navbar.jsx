import React, { useState } from "react";
import {
  MainContainer,
  ButtonContainer,
  RouteButton,
  LogoutButton,
} from "./styles";
import logo from "../../../assets/logo.png";
import { IconLogout } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { logout } from "../../../redux/user/user.action";
import { useDispatch } from "react-redux";

const ProfileNavbar = ({ selected }) => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(selected);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <MainContainer>
      <Link to="/">
        <img
          src={logo}
          alt="Description of the image"
          style={{ width: "50%", height: "auto" }}
        />
      </Link>
      <ButtonContainer>
        <Link
          to="/feed"
          onClick={() => handleButtonClick("projeler")}
          style={{ textDecoration: "none" }}
        >
          <RouteButton active={activeButton === "projeler"}>
            Projeler
          </RouteButton>
        </Link>
        <Link
          to="/profile"
          onClick={() => handleButtonClick("profil")}
          style={{ textDecoration: "none" }}
        >
          <RouteButton active={activeButton === "profil"}>Profil</RouteButton>
        </Link>
        <RouteButton href="/" onClick={() => dispatch(logout())}>
          <IoIosLogOut />
        </RouteButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default ProfileNavbar;
