import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let repositoriesNames = localStorage.getItem("repositoriesNames"); // read repositories saved at local storage
        if (repositoriesNames) {
            repositoriesNames = JSON.parse(repositoriesNames);
            setRepositories(repositoriesNames);
            localStorage.clear();   // clear repositories saved at local storage
        } else {
            navigate('/');  // redirect user to home page if repositories are not found
        }
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {
                    repositories.map(repository => <S.ListItem>Repositório: {repository}</S.ListItem>)
                }
            </ S.List>
            <S.LinkHome to="/" >Voltar</S.LinkHome>
        </S.Container>
    );
}