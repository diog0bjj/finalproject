import React, {useEffect, useState} from "react";
import * as S from './SMain'
import data from '../../../../AllmyWorks.json';


export default function Main(){

    const [MyWorks, setMyWorks] = useState([]);

    useEffect(()=>{
        setMyWorks(data)
    },[])

    return(
        <>
        <S.Portfolio>
            {MyWorks.map((item)=>(
                <S.EachProject>
                    <h2>{item.Nome}</h2>
                    <a style={{textDecoration:'none', color:'currentcolor'}} href={item.LinkPage}>
                        <S.Img style={{backgroundImage:`${item.Back}`}}>
                            <h3>imagem do trabalho</h3>
                        </S.Img>
                    </a> 
                    <S.Links>
                            <a style={{textDecoration:'none', color:'currentcolor'}} href={item.LinkRep}>Repositorio</a>
                    </S.Links>
                </S.EachProject>
            ))}
        </S.Portfolio>
        </>
    )
}