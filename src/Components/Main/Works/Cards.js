import React from 'react';
import styled from  'styled-components'

const Card = styled.div`
border: 1px solid #ea4626;
width:17rem;
height:21rem;
display:flex;
flex-direction:column;
align-items:center;
margin:1rem;
justify-content:space-between;
background-color:#212529;
box-shadow:0px 0px 0.2rem #ea4626;
textDecoration:none;
color:currentcolor;
color:white;
padding:1vh 0;`

export default function cards({children}){
    return(
        <Card>
            {children}
        </Card>
    )
}