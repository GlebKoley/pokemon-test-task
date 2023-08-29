import "./App.css";
import { Header } from "../Header/Header";
import { PokemonsContainer } from "../PokemonsContainer/PokemonsContainer";

function App() {
   return (
      <div className="content">
         <header className="header">
            <Header />
         </header>
         <main>
            <PokemonsContainer />
         </main>
      </div>
   );
}

export default App;
