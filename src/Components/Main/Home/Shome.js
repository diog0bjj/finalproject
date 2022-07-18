import styled, {keyframes} from "styled-components";
import ItsMe from "../../../Assets/ItsMe.png"

export const digit = keyframes`
0%{
    width:1rem;
}
50%{
    width:18rem;
}
100%{
    width:1rem;
}`

export const bar = keyframes`
from{
    border-color:#ea4626;
}
to{
    border-color:transparent;
}
`

export const Move = keyframes`
0%{
    bottom:0%;
}
100%{
    bottom:110%;
}`

export const Container = styled.section`
background-color:#212529;
min-height:90vh;
width:100%;
margin:0 auto;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-around;
padding-top:2vhrem;
position:relative;
overflow:hidden;`

export const Me = styled.div`
background-image:url('${ItsMe}');
background-position:center;
background-size:cover;
width:22rem;
height:22rem;
border-radius:50%;
border: double #ea4626;
border-width:thin;

@media(max-width:700px){
    width:16rem;
    height:16rem;
    margin-top:2vh;
}`

export const myBlog = styled.div`
display:flex;
flex-direction:column;
height:43vh;
justify-content:space-around;
align-items:center;
width:18rem;
`

export const Welcome = styled.h1`
margin-bottom:1rem;
text-transform:uppercase;
white-space: nowrap;
height:2rem;
color:#ea4626;
overflow:hidden;
animation: ${digit} 6s steps(19) infinite, ${bar} 600ms steps(19) infinite normal;
border-right: 1px solid #ea4626; `


export const Contacts = styled.ul`
list-style:none;
width:15rem;

@media(max-width:700px){
    margin-bottom:10vh;
}

& li{
    display:Flex;
    align-items:center;
    padding-left:0.5vw;
    height:2rem;
    background-color:#fff;
    margin:0.5rem;
    transform: skew(-10deg);
    background-color:#212529;
    color:#fff;
    border:1px double #ea4626;

    &:hover{
        background-color:#ea4626;
        transition: linear 0.5s;
    }
}`

export const SideCarIcon = styled.div`
position:absolute;
left:0%;
animation:${Move} linear 3s infinite;
height:5vh;
width:5vh;`