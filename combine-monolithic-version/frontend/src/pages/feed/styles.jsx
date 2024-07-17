import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
font-family: "Outfit", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    background-image: none;
    background-color: black;
  }

  /* Diğer stiller buraya eklenebilir */
`;
export const ProjectContainer = styled.div`
margin-bottom:20%;


`;
export const HeroHeader = styled.h1`
  color: white;
  font-family: "Outfit", sans-serif;
  font-size:3rem;

`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Button = styled.button` 
background-color: transparent;
border: 2px solid #5f9739;
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

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Arkaplanı solgunlaştırmak için rgba kullanılır */
  z-index: 1; /* Diğer içeriğin üzerinde olması için */
  
`;
export const ContentContainer = styled.div`
/* Diğer içeriklere ait stil tanımlamaları */
position: relative;
z-index: 2; /* Arkaplanın üzerinde olması için */
margin-bottom:auto
`;

export const NoProject = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:15rem;
width:50rem;
background-color:transparent;
padding:1rem;
margin:1rem;
font-family: "Outfit", sans-serif;

`