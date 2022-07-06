import styled from "styled-components";

export const Portfolio = styled.section`
display:Flex;
justify-content:center;
width:100%;
flex-wrap:wrap;
margin:0 auto;`

export const EachProject = styled.div`
border:solid black;
border-width:thin;
width:17rem;
height:20rem;
display:flex;
flex-direction:column;
align-items:center;
margin:1rem;
box-shadow:0px 0px 0.5rem black;`

export const Img = styled.div`
height:17rem;
width:17rem;`

export const Links = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
font-size:10px;
font-weight:700;
`