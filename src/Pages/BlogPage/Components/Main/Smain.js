import styled from "styled-components";
import ItsMe from "../../../../Assets/ItsMe.png"

export const Container = styled.section`
height:70vh;
width:100%;
background-image:url('https://wallpapermemory.com/uploads/458/rio-de-janeiro-wallpaper-ultra-hd-4k-482743.jpg');
margin:0 auto;
background-size:cover;
background-position:bottom;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-around;`

export const Me = styled.div`
background-image:url('${ItsMe}');
background-position:center;
background-size:cover;
width:14rem;
height:14rem;
border-radius:50%;
border: double black;
border-width:thin;`

export const Welcome = styled.h1`
margin-bottom:6rem;
text-transform:uppercase;
color:#fff;`