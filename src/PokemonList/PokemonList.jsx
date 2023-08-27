import { memo, useEffect, useState } from "react";
import { useGetPokemonsList } from "../hooks/useGetPokemonsList";
import { Chip, CircularProgress } from "@mui/material";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";

import "./PokemonList.css";

const PokemonList = ({ setCurrentPokemon }) => {
   const [pokemonData, setPokemonData] = useState([]);
   const { getPokemonsList } = useGetPokemonsList();

   useEffect(() => {
      if (pokemonData.length === 0) {
         getPokemonsList().then((pokemons) => setPokemonData(pokemons));
      } else {
         setCurrentPokemon(pokemonData[0]?.url);
      }
   }, [pokemonData]);

   if (pokemonData.status) {
      return (
         <div className="pokemon_list">
            <ErrorMessage>{pokemonData.message}</ErrorMessage>
         </div>
      );
   }
   console.log("render");
   return (
      <div className="pokemon_list">
         {pokemonData.length === 0 ? (
            <CircularProgress sx={{ margin: "auto" }} />
         ) : (
            pokemonData.map((name) => (
               <Chip
                  key={name.name}
                  label={name.name}
                  size="medium"
                  clickable
                  color="primary"
                  onClick={() => setCurrentPokemon(name.url)}
                  sx={{
                     height: "60px",
                     fontSize: "20px",
                     borderRadius: "44px",
                     padding: "20px",
                  }}
               />
            ))
         )}
      </div>
   );
};

export const MemoPokemonList = memo(PokemonList);
