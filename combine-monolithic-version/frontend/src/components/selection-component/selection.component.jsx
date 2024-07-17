import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { PiWebhooksLogoThin, PiWebhooksLogoFill } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { TbTopologyBus } from "react-icons/tb";
import { matchProject } from "../../redux/profile/profile.action";
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; 
import { displayUser } from "../../redux/profile/profile.action";
import { useEffect } from "react";
import cannotpass from '../../assets/cannotpass.png'


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CircleMenuContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  font-family: "IBM Plex Mono", monospace;
  margin-bottom:auto;

`;

const CenterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: purple;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  color: white;
  text-align: center;
font-family: "IBM Plex Mono", monospace;

  border: 2px solid transparent;

  &:hover {
    border-color: #8e44ad;
    filter: brightness(1.2);
  }
`;

const OptionCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    ${({ angle }) =>
      `rotate(${angle}deg) translateX(100px) rotate(${-angle}deg)`};
  width: 70px;
  height: 70px;
  background-color:purple;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    border-color: #8e44ad;
    filter: brightness(1.2);
  }
  font-family: "IBM Plex Mono", monospace;

`;

const OptionText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: "IBM Plex Mono", monospace;
  font-size:0.7rem;
  color:white;
`;

const SelectedOption = styled.div`
  text-align: center;
  font-weight: bold;
  color:white;
  font-family: "IBM Plex Mono", monospace;
  margin:1rem;
  

`;
 const Button = styled.button` 
background-color: transparent;
border: 2px solid purple;
color: white;
padding: 10px 20px;
font-family: "IBM Plex Mono", monospace;
cursor: pointer;
font-size:1rem;
margin:2px;
&:hover {
  color: #f78dd2;
  border: 2px solid #f78dd2;
}

`
const SelectionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(displayUser());
  }, [dispatch]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [wantedRole, setWantedRole] = useState("");


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const profileId = useParams();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setWantedRole(option);
    setMenuOpen(false);
  };


  const sendMatchProjectRequest = async()=>{
    try{
   
      const response = await dispatch(matchProject(wantedRole));
        navigate(`/profile/${profileId}`);

    }catch(err){
      
      console.log(err);
    }
}



  return (
    <>
  {profile.projects[0] ? (
    <SelectedOption>
      <img src={cannotpass} style={{width:'40%'}} alt="avatar" />
      <p>Zaten bir projeye eşlenmişsiniz. Başka bir projeye eşlenmek istiyorsanız lütfen şu anki projeden çıkın.</p>
    </SelectedOption>
  ) : (
    <>
      <CircleMenuContainer>
        <CenterCircle onClick={toggleMenu}>
          <span>Pozisyon</span>
        </CenterCircle>
        {isMenuOpen && (
          <>
            <OptionCircle angle={0} onClick={() => handleOptionClick("mobil")}>
              <OptionText>
                <FaMobileAlt />
                mobil
              </OptionText>
            </OptionCircle>
            <OptionCircle angle={90} onClick={() => handleOptionClick("backend")}>
              <OptionText>
                <PiWebhooksLogoFill />
                backend
              </OptionText>
            </OptionCircle>
            <OptionCircle angle={180} onClick={() => handleOptionClick("fullstack")}>
              <OptionText>
                <TbTopologyBus/>
                fullstack
              </OptionText>
            </OptionCircle>
            <OptionCircle angle={270} onClick={() => handleOptionClick("frontend")}>
              <OptionText>
                <PiWebhooksLogoThin />
                frontend
              </OptionText>
            </OptionCircle>
          </>
        )}
      </CircleMenuContainer>
      {selectedOption && (
        <SelectedOption>
          Tercih edilen pozisyon: {selectedOption} 
        </SelectedOption>
      )}
      
      <Button onClick={sendMatchProjectRequest}>Eşle</Button>
    </>
  )}
</>

  );
};

export default SelectionComponent;
