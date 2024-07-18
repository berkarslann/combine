import styled from 'styled-components';
export const MainContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:row;
margin-top:0;
width:90%;

`
export const ButtonContainer = styled.div` 
display:flex;
justify-content:center;
align-items:center;
margin-top:;
`


export const Button = styled.button` 
background-color: transparent;
border: 2px solid #944779;
color: #944779;
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

export const Contribute = styled.button`
color:white;
background-color: transparent;
border:none;
font-family: "IBM Plex Mono", monospace;
font-size:1rem;

margin:0.4rem;
cursor: pointer;
&:hover {
    color: #5f9739;
  }
  
 

`