import styled, { keyframes, css } from 'styled-components';
export const MainContainer = styled.div`
  position: relative;
  background-color: black;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* Ekran boyutu 768px"den küçük olduğunda arkaplan resmini küçült */
  @media (max-width: 768px) {
    background-image: none;
    background-color: black;
  }
  color: white;
  /* Diğer stiller buraya eklenebilir */
`;

export const FirstHalfContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-right: auto;
  width: 50%;
  background-color: #212121;
  height: calc(100vh - 7rem); /* Adjust the padding-top value */
  padding-left: 4rem;
  padding-top: 6rem;
  padding-bottom:1rem;
  overflow: hidden;
`;

export const SecondHalfContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  width: 50%;
`;

export const Question = styled.h1`
  font-family: "Outfit", sans-serif;
  font-size: ${({ isActive }) => (isActive ? '2.8rem' : '2rem')};
  color: ${({ isActive }) => (isActive ? 'white' : 'gray')};
  transition: opacity 0.3s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${fadeInAnimation} 0.3s ease-in-out;
    `};
`;
export const Answer = styled.div`
  font-family: "Outfit", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 6rem;
  width: 20rem;
  margin: 1rem;

  background-color: #212121;
  border-radius: 10px;
  border: 2px solid ${({ isSelected }) => (isSelected ? "purple" : "none")};
  &:hover {
    cursor: pointer;
    border: 2px solid purple;
    /* Add any additional hover styling properties as needed */
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NextButton = styled.button`
align-items: center;
  background-clip: padding-box;
  background-color: #5f9739;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
 font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 300;
  justify-content: center;
  line-height: 1.25;
  margin: 1rem;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    background-color: #6ba64a;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transition: background-color 0.2s ease-out; /* Adjust the duration as needed */
  }
`;

export const BackButton = styled.button`
background-color:transparent;
border:none;
  color: #5f9739;
font-family: "Outfit", sans-serif;
  font-size:1rem;
  cursor:pointer
`;

export const FirstContentContainer = styled.div`
display:flex;
justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SignUpForm = styled.form`

  width:50%;
  height:30%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

`
export const FormInputV1 = styled.input`
  width:100%;
  padding:0.6rem;
  margin:1rem;
  background-color:transparent;
  border:1px solid gray;
  color: white;
  font-family: "Outfit", sans-serif;
  border-radius:1px;
    &:focus{
      border:1px solid purple;
      outline: none;
    }
    text-transform: uppercase;

    &:hover{
      border:1px solid purple;

    }

`
export const FormInputV2 = styled.input`
  width:100%;
  padding:0.6rem;
  margin:1rem;
  background-color:transparent;
  border:1px solid gray;
  color: white;
  font-family: "Outfit", sans-serif;
  border-radius:1px;
    &:focus{
      border:1px solid purple;
      outline: none;
    }

    &:hover{
      border:1px solid purple;

    }
    &::placeholder {
      text-transform: uppercase;
    }
   

`