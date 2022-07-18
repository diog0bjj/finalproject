import React from "react";
import * as S from './Shome';
import {IoMdRocket} from 'react-icons/io'

export default function Main(){
    return(
        <>
        <S.Container>
            <div>
                <S.Me></S.Me>
            </div>
            <S.myBlog>
                <S.Welcome>Welcome to my Page</S.Welcome>
                <nav>
                    <S.Contacts>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Gmail</li>
                        <li>Github</li>
                    </S.Contacts>
                </nav>
            </S.myBlog>
            <S.SideCarIcon>
                <IoMdRocket color={'#ea4626'} size={40}/>
            </S.SideCarIcon>
        </S.Container>
        </>
    )
}