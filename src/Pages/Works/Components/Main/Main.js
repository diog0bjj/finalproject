import React, {useEffect, useState} from "react";
import * as S from './SMain'
import data from '../../../../AllmyWorks.json'

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
                    <S.Img>
                        <h3>imagem do trabalho</h3>
                    </S.Img>
                    <S.Links>
                            <a style={{textDecoration:'none', color:'currentcolor'}} href={item.LinkRep}>Repositorio</a>
                            <a style={{textDecoration:'none', color:'currentcolor'}} href={item.LinkPage}>Pagina On Line</a> 
                    </S.Links>
                </S.EachProject>
            ))}
        </S.Portfolio>
        </>
    )
}