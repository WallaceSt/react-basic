import Router from "./routes"
import {BrowserRouter} from "react-router-dom"
import "./style.css"

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
export default App;
