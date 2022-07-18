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
height:80vh;`

export const One = styled.div`
height:20vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;`

export const Me = styled.img`
width:20rem;
height:15rem;`

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
height:50vh;
background-color:white;
display:flex;
justify-content:space-around;
align-items:center;`

export const Text = styled.div`
height:40vh;
display:flex;
flex-direction:column;
justify-content:space-evenly;`