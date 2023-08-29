import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPokemonById } from "../../hooks/useGetPokemonById";

import "./PokemonStats.css";

const PokemonStats = ({ currentPokemon }) => {
   const [pokemonStats, setPokemonStats] = useState([]);
   const { getPokemonById, isLoading } = useGetPokemonById();

   useEffect(() => {
      const cancelRequestController = new AbortController();

      getPokemonById(currentPokemon, cancelRequestController).then((pokemon) => setPokemonStats(pokemon));

      return () => {
         cancelRequestController.abort();
      };
   }, [currentPokemon]);

   const { name, moves, id, height, sprites, attackStats } = pokemonStats;

   return (
      <div className="pokemon_stats_container">
         {pokemonStats.length < 1 || isLoading ? (
            <CircularProgress sx={{ margin: "auto" }} />
         ) : (
            <>
               <div className="pokemon_content">
                  <p className="pokemon_name">{name}</p>
                  <div className="img_container">
                     <img className="pokemon_image" src={sprites} alt="Pokemon image"></img>
                  </div>
               </div>
               <ul className="pokemon_attributes">
                  <li>Снялся в {moves} сериях</li>
                  <li>Id: {id}</li>
                  <li>height: {height}</li>
                  <li>attack: {attackStats}</li>
               </ul>
            </>
         )}
      </div>
   );
};

export { PokemonStats };
