import { useState } from "react";
import { MemoPokemonList } from "../PokemonList/PokemonList";
import { PokemonStats } from "../PokemonStats/PokemonStats";
import "./PokemonsContainer.css";

const PokemonsContainer = () => {
   const [currentPokemon, setCurrentPokemon] = useState("");

   return (
      <div className="pokemon_container">
         <MemoPokemonList setCurrentPokemon={setCurrentPokemon} />
         <PokemonStats currentPokemon={currentPokemon} />
      </div>
   );
};

export { PokemonsContainer };
