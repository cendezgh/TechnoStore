import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavNar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Un saludo!" />
    </>
  );
}

export default App;
