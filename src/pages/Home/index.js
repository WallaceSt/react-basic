import { useState } from 'react';
import axios from 'axios';
import * as S from "./styled"
import {useNavigate} from 'react-router-dom';

function Home(props) {
  const [usuario, setUsuario] = useState('WallaceSt');
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();
  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesNames = [];
        repositories.map(repo => {
          repositoriesNames.push(repo.name);
        });
        localStorage.setItem('repositoriesNames', JSON.stringify(repositoriesNames));
        setErro(false);
        navigate('/repositories');
      })
      .catch(err => {
        setErro(true);
      })
  }

  return (
    <S.HomeContainer>
      <S.Title>
        {props.title}! <br/> Meu nome é {usuario}.
      </S.Title>
      <S.Content>
        <S.Input placeholder="Usuário" name="usuario" onChange={e => {
          setUsuario(e.target.value);
        }} value={usuario} />
        <S.Button type='button' onClick={ handlePesquisa }>Pesquisar</S.Button>
      </S.Content>
      {
        erro ? <S.ErrorMsg>Ocorreu um erro. Tente mais tarde.</S.ErrorMsg> : ""
      }
    </S.HomeContainer>
  );
}
export default Home;
