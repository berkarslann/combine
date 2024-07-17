import React from "react";
import { Link } from "react-router-dom";

import {
  MainContainer,
  ContactGeneralContainer,
  ContactInfoContainer,
  ContactSecondContainer,
  SocialMediaIcons,
  ReservedContainer
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { PiCopyrightThin } from "react-icons/pi";

import logofooter from '../../../assets/logofooter.png'

const HomeFooter = () => {
  return (
    <MainContainer>
      <ContactGeneralContainer>
        <ContactInfoContainer>
          <h1 style={{ color: "#5f9739" }}>yaratıcı</h1>
          
          <Link to='https://www.jazzforcows.com/aboutme' >
          <h2 style={{ color: "white" }}>hakkında</h2>
          </Link>
          <Link to='https://www.jazzforcows.com' >
          <h2 style={{ color: "white" }}>blog</h2>
          </Link>
          <Link to='https://www.github.com/berkarslann' >
          <h2 style={{ color: "white" }}>kaynak kod</h2>
          </Link>
        </ContactInfoContainer>
      </ContactGeneralContainer>
      <ContactSecondContainer>
      
          <SocialMediaIcons>
          <img
            src={logofooter}
            alt="Description of the image"
            style={{ width: "15%", height: "auto", marginRight:'0.4rem' }}
          />
          <FaGithub style={{color:'white'}} />
          <CiInstagram style={{color:'white'}}/>
          <CiLinkedin style={{color:'white'}}/>
          </SocialMediaIcons>
          <ReservedContainer>
          <PiCopyrightThin style={{color:'white'}} />
          <p>combine.io 2024</p>

          </ReservedContainer>

      </ContactSecondContainer>
    </MainContainer>
  );
};

export default HomeFooter;
