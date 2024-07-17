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

export const ContentContainer = styled.div`
width:65%;
position: relative;
z-index: 2; /* Arkaplanın üzerinde olması için */
margin:2rem;

`;

export const ProfileInfoContainer = styled.div`
display:flex;
justify-content:space-between;`
export const TitleContainer = styled.div`



h1{
    color:white;
    font-size:4rem;
}

h3{
    color:#944779;
}

`
export const ImageContainer = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
background-color:gray;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GeneralInfoContainer = styled.div`
`
export const AppliedProject = styled.div`

h1{
    color:white;
}
`

export const AppliedProjectStatus = styled.div`
  border: 4px dashed #944779; /* Mor renkli dash border */
  background-color: rgba(148, 71, 121, 0.5);
  padding: 1rem;
  margin: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.07); /* Büyüklük oranını dilediğiniz değere ayarlayabilirsiniz */
  }

  h2 {
    color: white;
  }

  h4 {
    color: white;
  }
`;

export const ImageGeneralContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

h3{
  font-family: "IBM Plex Mono", monospace;
letter-spacing:2px;
}
`

export const UserSettings = styled.div`



  h1,h3{
    color:white;
  }


`


export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  height: 3rem;
  font-family: "Outfit", sans-serif;

  background-color: transparent;
  border: 1px solid gray; /* You may need to specify a border for the focus effect to be visible */
  color:white;
  &:hover {
    border-color: purple;
  }
  &::focus{
    border-color: none;

  }
`;
export const PasswordContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


`