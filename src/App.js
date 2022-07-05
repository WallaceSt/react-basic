import { useState } from 'react';


function App(props) {
  const [usuario, setUsuario] = useState('Wallace')
  return (
    <>
      <h1>
        {props.title}! <br/> Meu nome é {usuario}.
      </h1>
      <input placeholder="Usuário" name="usuario" className="usuario" id="usuario" />
      <button type='button'>Pesquisar</button>
    </>
  );
}
export default App;
