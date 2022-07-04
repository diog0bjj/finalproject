import React from "react";
import BlogPage from "./Pages/BlogPage/Blog.js";
import { createGlobalStyle} from "styled-components";
import AboutMePage from "./Pages/AboutMePage/AboutMe";
import WorksPage from "./Pages/Works/Works.js"


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:0;
}`

export default function App() {
  return (
    <>
    <GlobalStyle/>
    <BlogPage/>
    <AboutMePage/>
    <WorksPage/>
    </>
  )
}

