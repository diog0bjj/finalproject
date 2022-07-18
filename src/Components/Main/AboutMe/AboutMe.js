import React from "react";
import * as S from "./SaboutMe";
import athlete from "../../../Assets/athlete.png";
import Footer from "../../Footer/Footer";


export default function Main(){
    return(
        <>
        <S.Container>
                <S.Title>About Me</S.Title>
            <S.Infos>
                <S.Text>
                    <h2>Quem Sou eu</h2>
                    <p>Prazer, meu nome é Diogo Sales, tenho 20 anos e sou nascido e criado no Complexo da Maré, Zona Norte do Rio de Janeiro.</p>
                    <p>Atualmente estou cursando Engenharia Civil na UFRJ, desenvolvimento Web no Vai na Web e Lutando Jiu jitsu no tempo livre</p>
                    <p>No caso, eu cai de paraquedas na área de programaçao porém curti muito a área e pretendo continuar me desenvolvendo nela</p>
                </S.Text>
                <S.Me src={athlete} alt="imagem minha na academia"/>
            </S.Infos>
        </S.Container>
        <Footer/>
        </>
    )
}