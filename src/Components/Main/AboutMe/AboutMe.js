import React from "react";
import * as S from "./SaboutMe";
import athlete from "../../../Assets/athlete.png";
import Footer from "../../Footer/Footer";
import vnw from "../../../Assets/Vnw.png";
import nh from "../../../Assets/Nh.jpg";
import ufrj from '../../../Assets/UFRJ.png';
import mareGoals from '../../../Assets/MareGoals.png';
import FirstPage from '../../../Assets/FirstPage.png'


export default function Main(){
    return(
        <>
        <S.Container>
                <S.Title>About Me</S.Title>
            <S.Infos>
                <S.Text>
                    <h2>Quem Sou eu</h2>
                    <p>Prazer, meu nome é Diogo Sales, tenho 20 anos e sou nascido e criado no Complexo da Maré, Zona Norte do Rio de Janeiro.</p>
                    <p>Atualmente estou cursando Engenharia Civil na UFRJ, desenvolvimento Web no Vai na Web e Lutando Jiu jítsu no tempo livre</p>
                    <p>No caso da programação, eu nunca tinha tido contato com área, porém através de um amigo que faz parte do Vnw eu decidi me arriscar na área e cá estou eu hoje, programando em ReactJS. Nem sabia que isso existia ha 1 ano atras.</p>
                </S.Text>
                <S.Me src={athlete} alt="imagem minha na academia"/>
            </S.Infos>
            <S.Gallery>
                <S.Ilustrate src={vnw} alt='logo vai na web'/>
                <S.Ilustrate src={nh} alt='imagem da Nova Holanda, favela no complexto da Maré, Rj.'/>
                <S.Ilustrate src={ufrj} alt='logo escola politecnica ufrj'/>
            </S.Gallery>
            <S.StartSection>Comparaçao de páginas ao longo do tempo</S.StartSection>
            <S.Evolve>
                <a href='https://codepen.io/diogosales07/full/XWgEqLv'><S.Jobs src={FirstPage} alt='Primeira pagina feita por mim (setembro -2021)'/></a>
                <a href='https://maregoals.netlify.app/'><S.Jobs src={mareGoals} alt='Ultima pagina até o momento ( julho - 2022)'/></a>
            </S.Evolve>
        </S.Container>
        <Footer/>
        </>
    )
}