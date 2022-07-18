import React from "react";
import { createGlobalStyle} from "styled-components";
import Header from './Components/Header/Header';


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:0;
  text-decoration:none;
  color:currentcolor;
}`

export default function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    </>
  )
}

