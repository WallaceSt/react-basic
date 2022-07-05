import { useState } from 'react';


function App(props) {
  const [usuario, setUsuario] = useState('WallaceSt')

  function handlePesquisa() {
    console.log(usuario)
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
