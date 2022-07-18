import styled,{keyframes} from "styled-components";

export const digit = keyframes`
from{
    width:1rem;
}
to{
    width:14rem;
}`

export const Container = styled.section`
background-color:#212529;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
padding:2vh 0;`

export const Me = styled.img`
width:17rem;
height:17rem;
border-radius:50%;
border: 1px double #ea4626;`

export const Title = styled.h1`
animation: ${digit} 2s steps(15);
margin-bottom:1rem;
text-transform:uppercase;
white-space: nowrap;
color:#ea4626;
overflow:hidden;
font-size:6vh;
letter-spacing:0.2rem;`

export const Infos = styled.div`
width:90vw;
background-color:#212529;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
padding:1vw 0;`

export const Text = styled.div`
color:white;
display:flex;
flex-direction:column;
align-items:flex-start;
width:60vw;
min-width:16rem;

& p{
    margin:0.5rem 0;
}`

export const StartSection = styled.h2`
color:#ea4626;
padding:1rem;
font-size:3vh;
letter-spacing:5px;
text-transform:uppercase;`

export const Gallery = styled.div`
margin:1rem 0;
border:solid #ea4626;
border-width:0 0 1px 0;
display:Flex;
width:80vw;
justify-content:space-evenly;
padding:1rem 0;
flex-wrap:wrap;

@media(max-width:700px){
    flex-direction:column;
    align-items:center;
}`

export const Ilustrate = styled.img`
height:10rem;
width:10rem;
border-radius:50%;
`

export const Evolve = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;`

export const Jobs = styled.img`
width:15rem;
height:15rem;
object-fit:cover;
object-position:left;
border: 1px double #ea4626;
margin:1rem;
`