import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
background-color:#944779;
width:100%;
`

export const ContactGeneralContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
font-family: "IBM Plex Mono", monospace;

`
export const ContactInfoContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

font-size:0.7rem;

h2:hover{
    text-decoration: underline;
}

`
export const ContactSecondContainer = styled.div`
display:flex;
justify-content: space-around; /* Distribute items evenly
align-items:center;
`

export const SocialMediaIcons = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export const ReservedContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
color:white;

p{
    font-family: "IBM Plex Mono", monospace;

}

`