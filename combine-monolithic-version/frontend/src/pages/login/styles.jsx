import styled from "styled-components";
export const MainContainer = styled.div`
position: relative;
  background-color:black;  
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;  
  /* Ekran boyutu 768px"den küçük olduğunda arkaplan resmini küçült */
  @media (max-width: 768px) {
    background-image: none;
    background-color: black;
  }
  color:white;
  /* Diğer stiller buraya eklenebilir */

`

export const LoginContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column; 
font-family: "IBM Plex Mono", monospace;
font-weight:100;

margin-bottom:auto;

h1{
  font-family: "Protest Strike", sans-serif;
  letter-spacing:2px;
  font-size:4rem;
}

h3{
  font-size:1rem;
  letter-spacing:2px;
}
h5{
  font-size:0.7rem;
}
`
export const LoginInput = styled.input`
background-color:purple;
color:black;
width:40rem;
height:2rem;
margin:0.3rem;
padding:1rem;
font-family: "IBM Plex Mono", monospace;
font-weight:900;
transition: background-color 0.3s ease;  /* Add a smooth transition effect */

&:focus {
  background-color: #a102a1; /* Açık mor renk için lavender kullanılıyor */

}
`
export const LoginButton = styled.button`
  width: 10rem;
  height: 4rem;
  background-color: #5f9739;
  border: none;
  font-family: "IBM Plex Mono", monospace;
  color: white;
  transition: background-color 0.3s ease;  /* Add a smooth transition effect */

  &:hover {
    cursor: pointer;
    background-color: #3d6125;  /* Darken the background color by 10% */
  }

`
