import React from "react";
import * as S from './Sfooter';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {ImMail} from 'react-icons/im'

export default function Footer(){
    return(
        <>
        <S.Container>
            <nav>
                <S.SocialMidias>
                    <a style={{color:"currentcolor"}} href="https://instagram.com/ggsantz" target="_blank"><li><FaInstagramSquare size={30}/></li></a>
                    <a style={{color:"currentcolor"}} href = "https://www.linkedin.com/in/diogo-sales-368b64224"><li><FaGithubSquare size={30}/></li></a>
                    <a style={{color:"currentcolor"}}href="mailto:dsales289@poli.ufrj.br" target="_blank"><li><ImMail size={30}/></li></a>
                </S.SocialMidias>
            </nav>
        </S.Container>
        </>
    )
}