import styled from 'styled-components';

export const ProjectCardContainer = styled.div`

height:15rem;
width:50rem;
background-color:#1b1b1b;
padding:1rem;
margin:1rem;
font-family: "Outfit", sans-serif;

`

export const ProjectGeneralInfoContainer = styled.div`
display: flex; justify-content: space-between; align-items: center;
`

export const ProjectEmptyRoleContainer = styled.div`
display: flex; justify-content: space-between; align-items: center;

`

export const ProjectEmptyRoleContainerV2 = styled.div`
display: flex; 
justify-content: flex-start; 
align-items: center;

`
export const ProjectRole = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:2rem;
background-color:#6b6969;
margin: 0 0.6rem 0.6rem 0;
color:white;
padding:0.3rem;
border: 1px dashed #fff;
font-size:0.8rem;
`
export const NavButton = styled.div`
text-align:right
`

export const StyledButton = styled.button`
appearance: none;
background-color: transparent;
border: 2px solid #944779;
border-radius: 5px;
box-sizing: border-box;
color: #944779;
cursor: pointer;
display: inline-block;
font-size: 15px;
font-weight: 600;
line-height: normal;
margin: 0;
font-family: "Outfit", sans-serif;

outline: none;

text-align: center;
text-decoration: none;
transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
height:2rem;
width:10rem;
will-change: transform;

&:disabled {
  pointer-events: none;
}

&:hover {
  color: #fff;
  background-color: #944779;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

&:active {
  box-shadow: none;
  transform: translateY(0);
}
`;


export const ProjectDetailsContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  margin:0.7rem;
` 

export const ProjectDetailsExpContainer = styled.div`
color:white;

h4{
  margin:0.2rem;
  color:gray;
}
h5{
  margin:0.2rem;
}
`