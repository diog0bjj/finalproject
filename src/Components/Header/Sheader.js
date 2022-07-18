import styled from 'styled-components';

export const Container = styled.section`
height:10vh;
background-color:#e5e7eb;
display:flex;
justify-content:flex-end;
align-items:center;

@media(max-width:700px){
    justify-content:center;
}`

export const Menu = styled.ul`
list-style:none;
display:flex;
width:19rem;
justify-content:space-evenly;
font-weight:bold;
font-size:15px;`

export const MenuItem = styled.li`
&:hover{
    font-size:18px;
    cursor:pointer;
}`