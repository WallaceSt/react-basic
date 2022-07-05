import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import * as S from "./styled"

function Home(props) {
  const [usuario, setUsuario] = useState('WallaceSt');
  const [erro, setErro] = useState(false);
  const navigate = useNavigate(); // use navigate hook to handle navigation

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`) // get data from github repositories
      .then(response => {
        const repositories = response.data;
        const repositoriesNames = [];
        repositories.map(repo => { // pushes only the repositories names
          repositoriesNames.push(repo.name);
        });
        localStorage.setItem('repositoriesNames', JSON.stringify(repositoriesNames)); // save repositories names to local storage
        setErro(false);
        navigate('/repositories');  // redirect to repositories page
      })
      .catch(err => {
        setErro(true);  // set error to show error message if something went wrong
      });
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
