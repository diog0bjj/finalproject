import React from "react";
import * as S from "./SaboutMe";
import athlete from "../../../Assets/athlete.png";
import NH from "../../../Assets/Nh.jpg"
import Vnw from "../../../Assets/Vnw.png"
import Footer from "../../Footer/Footer";

export default function Main(){
    return(
        <div style={{backgroundColor:'#212529'}}>
        <S.Containers>
            <S.Infos>
                <S.Photos src={athlete} alt='Foto pessoal'/>
                <S.Text>Prazer, Meu nome é Diogo Sales, tenho 20 anos, Sou aluno de engenharia civil na UFRJ e estudante de Programaçao pelo VnW. Fora isso, tento ser um atleta de jiujitsu.</S.Text>
            </S.Infos>
        </S.Containers>
        <S.Containers>
            <S.Infos>
                <S.Photos src={NH} alt= 'Foto de onde moro'/>
                <S.Text>Atualmente moro em um bairro chamado Maré. No caso, além de bairro, a Maré é também um complexo de favelas localizado na zona norte da cidade do Rio de Janeiro, RJ.</S.Text>
            </S.Infos>
        </S.Containers>
        <S.Containers>
            <S.Infos>
                <S.Photos src={Vnw} alt='Foto do Vai na Web, instituiçao a qual estudo programaçao'/>
                <S.Text>Como disse, estou fazendo programaçao no VnW, porém foi algo repentino na minha vida, eu nunca esparava estar programando sites como esse. So tenho a agradecer.</S.Text>
            </S.Infos>
        </S.Containers>
        <Footer/>
        </div>
    )
}