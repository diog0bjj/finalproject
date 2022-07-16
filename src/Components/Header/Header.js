import React from "react";
import * as S from './Sheader';
import HomePages from "../Main/Home/Home";
import WorksPages from "../Main/Works/Works";
import AboutMePages from "../Main/AboutMe/AboutMe";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function Header(){
    return(
        <Router>
        <S.Container>
            <div>
                <nav>
                    <S.Menu>
                        <S.MenuItem><Link to='/'>Home</Link></S.MenuItem>
                        <S.MenuItem><Link to='/AboutMe.js'>About Me</Link></S.MenuItem>
                        <S.MenuItem><Link to='/Works.js'>Works</Link></S.MenuItem>
                    </S.Menu>
                </nav>
            </div>
        </S.Container>
        <Routes>
            <Route path='/Works.js' element={<WorksPages/>}/>
            <Route path='/AboutMe.js' element={<AboutMePages/>}/>
            <Route path='/' element={<HomePages/>}/>
        </Routes>
        </Router>
    )
}