import React from "react";
import * as S from './Sheader';

export default function Header(){
    return(
        <S.Container>
            <div>
                <nav>
                    <S.Menu>
                        <S.MenuItem>Home</S.MenuItem>
                        <S.MenuItem>About Me</S.MenuItem>
                    </S.Menu>
                </nav>
            </div>
        </S.Container>
    )
}