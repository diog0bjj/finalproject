import React from "react";
import * as S from './Sfooter';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

export default function Footer(){
    return(
        <>
        <S.Container>
            <nav>
                <S.SocialMidias>
                    <a style={{color:"#212529"}} href="https://instagram.com/ggsantz"><li><FaInstagramSquare size={30}/></li></a>
                    <a style={{color:"#212529"}} href = "https://www.linkedin.com/in/diogo-sales-368b64224"><li><FaLinkedin size={30}/></li></a>
                    <a style={{color:"#212529"}}href="mailto:dsales289@poli.ufrj.br"><li><FaMailBulk size={30}/></li></a>
                    <a style={{color:"#212529"}}href="https://github.com/diog0bjj"><li><FaGithubSquare size={30}/></li></a>
                </S.SocialMidias>
            </nav>
        </S.Container>
        </>
    )
}