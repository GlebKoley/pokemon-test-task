import { useState } from "react";
import { api } from "../services/api";

export const useGetPokemonById = () => {
   const [isLoading, setIsLoading] = useState(false);
   const { apiRequest, _transformPokemonData } = api();

   const getPokemonById = async (currentPokemon, controller) => {
      const pokemonId = +currentPokemon.match(/(?<=\/)[0-9]+/gm).join("");
      setIsLoading(true);

      const request = await apiRequest.get(`pokemon/${pokemonId}`, { params: { limit: null }, signal: controller.signal });
      setIsLoading(false);
      return _transformPokemonData(request.data);
   };

   return { getPokemonById, isLoading };
};
