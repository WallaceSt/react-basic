import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        let repositoriesNames = localStorage.getItem("repositoriesNames");
        if (repositoriesNames) {
            repositoriesNames = JSON.parse(repositoriesNames);
            setRepositories(repositoriesNames);
            localStorage.clear();
        } else {
            navigate('/');
        }
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