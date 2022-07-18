import React from "react";
import * as S from './Sworks';
import Contador from '../../../Assets/Contador.png';
import Todo from '../../../Assets/ToDo.png';
import TodoFlix from '../../../Assets/TodoFlix.png';
import DogApi from '../../../Assets/DogApi.png';
import PortFlow from '../../../Assets/PortFlow.png';
import MareGoals from '../../../Assets/MareGoals.png';
import Mario from '../../../Assets/Mario.png'
import Cards from './Cards'
import Footer from "../../Footer/Footer";

export default function Main(){
    return(
        <>
        <S.Portfolio>
            <Cards>
                <h2>Contador</h2>
                <a href="https://cronometroinicial.netlify.app/"><S.PageOnLine src={Contador} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/cronometro"><S.Link>Repositorio</S.Link></a>
            </Cards>
            <Cards>
                <h2>DogApi</h2>
                <a href="https://dogapibydiogo.netlify.app/"><S.PageOnLine src={DogApi} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/DogApi"><S.Link>Repositorio</S.Link></a>
            </Cards>
            <Cards>
                <h2>TodoFlix</h2>
                <a href="https://todoflixdiogo.netlify.app/"><S.PageOnLine src={TodoFlix} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/Todoflix"><S.Link>Repositorio</S.Link></a>
            </Cards>
            <Cards>
                <h2>Tarsila-do-Amaral</h2>
                <a href="https://diog0bjj.github.io/Tasila-do-amaral/"><S.PageOnLine src={Contador} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/Tasila-do-amaral"><S.Link>Repositorio</S.Link></a>
            </Cards>
            <Cards>
                <h2>Portflow</h2>
                <a href="https://diog0bjj.github.io/Portflow/"><S.PageOnLine src={PortFlow} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/Portflow"><S.Link>Repositorio</S.Link></a>
            </Cards>
            <Cards>
                <h2>ToDo Basic</h2>
                <a href="https://diog0bjj.github.io/To-Do-App/"><S.PageOnLine src={Todo} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/To-Do-App"><S.Link>Repositorio</S.Link></a>
            </Cards>
            <Cards>
                <h2>MaréGoals</h2>
                <a href="https://maregoals.netlify.app/"><S.PageOnLine src={MareGoals} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/MareGoals"><S.Link>Repositorio</S.Link></a>
            </Cards>
            <Cards>
                <h2>Mario Keyframes</h2>
                <a href="https://testingkeyframes.netlify.app/"><S.PageOnLine src={Mario} alt='Imagem do site Super Mario com Keyframes'/></a>
                <a href="https://github.com/diog0bjj/TestingKeyFrames"><S.Link>Repositorio</S.Link></a>
            </Cards>
        </S.Portfolio>
        <Footer/>
        </>
   )
}