import React from "react";
import BlogPages from "./Pages/BlogPage/Blog.js";
import { createGlobalStyle} from "styled-components";
import AboutMePages from "./Pages/AboutMePage/AboutMe";
import WorksPages from "./Pages/Works/Works.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
    <Router>
    <GlobalStyle/>
    <Routes>
            <Route path='/Works.js' element={<WorksPages/>}/>
            <Route path='/' element={<BlogPages/>}/>
            <Route path='/AboutMe.js' element={<AboutMePages/>}/>
        </Routes>
    </Router>
    </>
  )
}

