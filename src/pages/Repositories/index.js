import { useEffect, useState } from "react";
import * as S from "./styled";

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => { 
        let repositoriesNames = localStorage.getItem("repositoriesNames");
        repositoriesNames = JSON.parse(repositoriesNames);
        setRepositories(repositoriesNames);
        localStorage.clear();
    }, [])

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {
                    repositories.map(repository => <S.ListItem>Repositório: { repository }</S.ListItem>)    
                }
            </ S.List>
            <S.LinkHome to="/" >Voltar</S.LinkHome>
        </S.Container>
    )
}