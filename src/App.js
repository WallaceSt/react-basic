function App(props) {
  return (
    <>
      <h1>
        {props.title}
      </h1>
      <input placeholder="Usuário" name="usuario" className="usuario" id="usuario" />
    </>
  );
}
export default App;
