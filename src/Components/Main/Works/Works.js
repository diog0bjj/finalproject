import React from "react";
import * as S from './Sworks';
import Contador from '../../../Assets/Contador.png';
import Todo from '../../../Assets/ToDo.png';
import TodoFlix from '../../../Assets/TodoFlix.png';
import DogApi from '../../../Assets/DogApi.png';
import PortFlow from '../../../Assets/PortFlow.png';
import Cards from './Cards'

export default function Main(){
    return(
        <>
        <S.Portfolio>
            <Cards>
                <h2>Contador</h2>
                <a href="https://cronometroinicial.netlify.app/"><S.PageOnLine src={Contador} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/cronometro"><h3>Repositorio</h3></a>
            </Cards>
            <Cards>
                <h2>DogApi</h2>
                <a href="https://dogapibydiogo.netlify.app/"><S.PageOnLine src={DogApi} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/DogApi"><h3>Repositorio</h3></a>
            </Cards>
            <Cards>
                <h2>TodoFlix</h2>
                <a href="https://todoflixdiogo.netlify.app/"><S.PageOnLine src={TodoFlix} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/Todoflix"><h3>Repositorio</h3></a>
            </Cards>
            <Cards>
                <h2>Tarsila-do-Amaral</h2>
                <a href="https://diog0bjj.github.io/Tasila-do-amaral/"><S.PageOnLine src={Contador} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/Tasila-do-amaral"><h3>Repositorio</h3></a>
            </Cards>
            <Cards>
                <h2>Portflow</h2>
                <a href="https://diog0bjj.github.io/Portflow/"><S.PageOnLine src={PortFlow} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/Portflow"><h3>Repositorio</h3></a>
            </Cards>
            <Cards>
                <h2>Todo</h2>
                <a href="https://diog0bjj.github.io/To-Do-App/"><S.PageOnLine src={Todo} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/To-Do-App"><h3>Repositorio</h3></a>
            </Cards>
            <Cards>
                <h2>MaréGoals</h2>
                <a href="https://cronometroinicial.netlify.app/"><S.PageOnLine src={Contador} alt='Imagem do site Contador'/></a>
                <a href="https://github.com/diog0bjj/MareGoals"><h3>Repositorio</h3></a>
            </Cards>
        </S.Portfolio>
        </>
   )
}