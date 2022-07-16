import React from 'react';
import styled from  'styled-components'

const Card = styled.div`
border:solid black;
border-width:thin;
width:17rem;
height:21rem;
display:flex;
flex-direction:column;
align-items:center;
margin:1rem;
box-shadow:0px 0px 0.5rem black;
textDecoration:none;
color:currentcolor;`

export default function cards({children}){
    return(
        <Card>
            {children}
        </Card>
    )
}