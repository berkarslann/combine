import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:row;
font-family: "Outfit", sans-serif;
height:100%;
width:90%;
margin-bottom:auto;

`
export const ButtonContainer = styled.div` 
display:flex;
justify-content:center;
align-items:center;
margin-top:;
`

export const RouteButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-bottom: 2px solid #333;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: border-bottom 0.3s ease;
  font-weight: 900;
  margin: 0.3rem;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #944779;
    `}

  &:hover {
    border-bottom: ${({ active }) => (active ? '2px solid #944779' : '2px solid #333')};
  }
`;

export const LogoutButton = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;