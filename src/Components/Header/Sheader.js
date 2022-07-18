import styled from 'styled-components';

export const Container = styled.section`
height:10vh;
background-color:#e5e7eb;
display:flex;
justify-content:flex-end;

@media(max-width:700px){
    justify-content:center;
}`

export const Menu = styled.ul`
list-style:none;
display:flex;
width:19rem;
justify-content:space-evenly;
font-weight:bold;
font-size:15px;
height:10vh;
align-items:center;`

export const MenuItem = styled.li`
&:hover{
    text-decoration: underline;
    cursor:pointer; 
    transition: linear 0.5s;

}`