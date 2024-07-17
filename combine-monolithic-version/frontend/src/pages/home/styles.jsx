import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
overflow:hidden;
  position: relative;
  background-color: black;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Ekran boyutu 768px'den küçük olduğunda arkaplan resmini küçült */
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: none;
    background-color: black;
  }

  /* Diğer stiller buraya eklenebilir */
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  width: 55%;
  margin: 2.7rem;
  margin-right: 16rem;

  @media (max-width: 768px) {
    width: 70%;
    text-align: center;
    margin: auto;
  }
`;
export const VisionContentInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  width: 55%;
  margin: 2.7rem;
  margin-right: 1rem;
`;

export const VisionContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin: auto;
  }
`;

export const SideNote = styled.div`
  color: white;
  text-align: left; /* Sola hizala */
  font-family: "Protest Strike", sans-serif;
  font-size: 4rem;

  @media (max-width: 768px) {
    text-align: left; /* Sola hizala */

    font-size: 3rem;
  }
`;
export const SideNoteV2 = styled.div`
  color: white;
  text-align: left;
  margin: 1rem 0;
  font-family: "IBM Plex Mono", monospace;
`;
export const SideNoteV3 = styled.div`
  color: white;
  width: 15rem;
  text-align: right;
  font-family: "IBM Plex Mono", monospace;
`;
export const SideNoteV4 = styled.div`
  color: white;
  text-align: left;
  margin: 1rem 0;
  width: 15rem;

  font-family: "IBM Plex Mono", monospace;
`;

const glitchAnimation = keyframes`
  0% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: inset(40% -6px 43% 0);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: inset(80% -6px 5% 0);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(0);
  }
`;

export const GlitchButton = styled.button`
  margin-top: 1rem;
  margin-right: 39rem;
  width: 150px;
  height: 86px;
  line-height: 48px;
  font-size: 10px;
  font-family: "IBM Plex Mono", monospace;
  background: #944779;
  border: 0;
  color: #fff;
  letter-spacing: 1px;
  box-shadow: 6px 0px 0px #639b3b;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &::after {
    content: "beni bir projeye eşle";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 10;
    background: #944779;
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: inset(50% 50% 50% 50%);
    animation: ${glitchAnimation} 7s infinite steps(4, end);
  }

  &:hover::after {
    animation: none;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 86px;
    line-height: 88px;
  }
`;
export const UniInfo = styled.div`
  margin-top: 3rem;
`;

export const StepNote = styled.div`
  color: white;
  text-align: left; /* Sola hizala */
  font-family: "Protest Strike", sans-serif;
  font-size: 4rem;
  color: white;
  text-align: left; /* Sola hizala */
  font-family: "Protest Strike", sans-serif;
  font-size: 3rem;
  margin-top: 5rem;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
    
  }
  
`;

export const StepInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: auto;
`;
export const StepInfoContainerV2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: auto;
`;
export const moveDots = keyframes`
  to {
    transform: translate(50vw, 50vh);
  }
`;

export const DotPatternContainer = styled.div`
  position: relative;
  width: 50vw;
  height: 10vh;
  overflow: hidden;
  margin-left: 16rem;
`;

export const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 80%;

  &:nth-child(odd) {
    animation: ${moveDots} 7s linear infinite alternate;
  }

  &:nth-child(even) {
    animation: ${moveDots} 7s linear infinite alternate-reverse;
  }
`;

export const LightInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-left: 2rem;
  h2 {
    color: white;
    font-family: "Protest Strike", sans-serif;
    font-weight: 100;
    letter-spacing: 2px;
  }
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin: auto;
  }
`;
export const LightInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 3rem;
  margin-left: 3rem;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin: auto;
  }
`;
export const StairsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  margin-top: 12rem;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin: auto;
  }
`;
export const StairsInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-bottom: 4rem;

  h2 {
    color: white;
    font-size: 1rem;
    margin-left: 0.8rem;
    margin-top: 3.4rem;
    font-family: "IBM Plex Mono", monospace;

    margin-right: auto;
  }
`;

const textAnimation = keyframes`
  0% {
    transform: translateX(-90%);
  }
  100% {
    transform: translateX(83%);
  }
`;

export const DesignedDiv = styled.div`
font-family: "IBM Plex Mono", monospace;
font-size:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 25rem;
  bottom: 8.7rem;
  overflow: hidden;
  width: 115%;
  height: 3.4rem;
  background-color: #944779;
  transform: rotate(-5deg);
 border-radius:10px;

  /* Animation for text flow */
  &:before {
    content: attr(data-text);
    position: absolute;
    white-space: nowrap;
    animation: ${textAnimation} 9s linear infinite; /* Adjust animation duration as needed */
  }
  @media (max-width: 768px) {
   display:none;
  }
`;