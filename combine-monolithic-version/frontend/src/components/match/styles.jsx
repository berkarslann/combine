import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const MatchGeneralContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  min-width:70vh;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* En üstte olması için */
  background-color: #17171c;
  padding: 20px;
  border: 4px dashed #944779; /* Mor renkli dash border */
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-in-out; /* fade-in animasyonunu ekledik */
  font-family: "Outfit", sans-serif;



  `

  export const MatchInfo = styled.div`
  color:white;
  margin-bottom:auto;
  font-family: "Outfit", sans-serif;
  font-weight:600;
  font-size:1.7rem;

  `
  export const ImgContainer = styled.div`
  display:flex;
  justify-content:space-around;
  
  `