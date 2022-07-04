import React from "react";
import * as S from './Smain'


export default function Main(){
    return(
        <>
        <S.Container>
            <div>
                <S.Me></S.Me>
            </div>
            <div>
                <S.Welcome>Welcome to my Page</S.Welcome>
            </div>
        </S.Container>
        </>
    )
}