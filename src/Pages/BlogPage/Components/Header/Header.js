import React from "react";
import * as S from './Sheader';
import {Link} from "react-router-dom";


export default function Header(){
    return(
        <S.Container>
            <div>
                <nav>
                    <S.Menu>
                        <S.MenuItem><Link to='/Works.js'>Works</Link></S.MenuItem>
                        <S.MenuItem><Link to='/AboutMe.js'>About Me</Link></S.MenuItem>
                    </S.Menu>
                </nav>
            </div>
        </S.Container>
    )
}