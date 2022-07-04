import styled from "styled-components";


export const Containers = styled.section`
background-color:#FFEBCD;
display:flex;
justify-content:space-evenly;
align-items:center;
width:100%;
height:29rem;

@media(max-width:700px){
    flex-direction:column;
    height:37rem;
}`

export const Infos = styled.div`
position:relative;
height:18rem;`

export const Text = styled.p`
display:flex;
align-items:center;
text-align: center;
width:12rem;
border:double black;
background-color:white;
border-width:thin;
font-size:11px;
font-weight:700;
height:6.5rem;
position:absolute;
top:90%;
left:20%;
@media(max-width:700px){
    left:10%;
}`

export const Photos = styled.img`
width:20rem;
height:18rem;
border:solid black;
border-width:thin;

@media(max-width:700px){
    width:15rem;
}`