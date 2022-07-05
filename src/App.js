import Router from "./routes"
import {BrowserRouter} from "react-router-dom"

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
