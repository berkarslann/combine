import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  overflow: hidden;
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

export const SideNoteV5 = styled.div`
  color: white;
  text-align: left; /* Sola hizala */
  font-family: "Protest Strike", sans-serif;
  font-size: 6rem;
  @media (max-width: 768px) {
    text-align: left; /* Sola hizala */

    font-size: 3rem;
  }
`;
export const SideNoteV2 = styled.div`
  color: white;
  text-align: left;

  font-family: "IBM Plex Mono", monospace;
`;
export const SideNoteV4 = styled.div`
  color: #5f9739;
  text-align: left;
  margin: 1rem;
  font-family: "IBM Plex Mono", monospace;
`;
