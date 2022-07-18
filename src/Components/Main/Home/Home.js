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
                        <a href='https://instagram.com/ggsantz'><li>Instagram</li></a>
                        <a href='https://www.linkedin.com/in/diogo-sales-368b64224'><li>Linkedin</li></a>
                        <a href='mailto:dsales289@poli.ufrj.br'><li>Gmail</li></a>
                        <a href='https://github.com/diog0bjj'><li>Github</li></a>
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