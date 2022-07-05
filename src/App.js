import { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario] = useState('WallaceSt')

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => { 
        console.log(err);
      })
  }

  return (
    <>
      <h1>
        {props.title}! <br/> Meu nome é {usuario}.
      </h1>
      <input placeholder="Usuário" name="usuario" onChange={e => {
        setUsuario(e.target.value);
      }} value={usuario} />
      <button type='button' onClick={ handlePesquisa }>Pesquisar</button>
    </>
  );
}
export default App;
