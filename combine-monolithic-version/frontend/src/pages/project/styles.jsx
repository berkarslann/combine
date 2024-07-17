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
  margin-top: auto;
  /* Diğer stiller buraya eklenebilir */
`;

export const DescriptionContainer = styled.div`
  h2 {
    color: white;
  }
`;
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: white;
  margin-bottom: auto;
`;
export const BackButton = styled.button`
  color: #944779;
  background-color: transparent;
  border: none;
  font-family: "Outfit", sans-serif;

  &:hover {
    cursor: pointer;
  }
`;
export const FirstInfoContainer = styled.div`
  margin-left: auto;
  text-align: left;
  h1 {
    color: white;
  }
  h2 {
    color: #944779;
  }
  h3 {
    color: #944779;
  }
  h4 {
    color: gray;
    font-size: 0.6rem;
  }
`;
export const ProjectTitle = styled.div``;
export const ProjectOwner = styled.div``;
export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: #6b6969;
  margin: 0 0.6rem 0.6rem 0;
  color: white;
  padding: 0.3rem;
  width: 4rem;
  border: 1px dashed #fff;
  font-size: 0.8rem;
`;
export const TagContainer = styled.div`
  margin-right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
`;
export const ProjectAbout = styled.div`
display:flex;
justify:content:center;
align-items:center;
flex-direction:column;
color:white;
width:45rem;
margin-top:1rem;
margin-bottom:1rem;
`;
export const InfoContainer = styled.div`
  margin-bottom: auto;
`;
export const InfoPackage = styled.div``;
export const InfoLogoPackage = styled.div`
  h2 {
    color: #944779;
  }
`;
export const OpenTags = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: black;
  margin: 0 0.6rem 0.6rem 0;
  color: white;
  padding: 0.3rem;
  width: 4rem;
  border: 1px dashed #fff;
  font-size: 0.8rem;
`;
