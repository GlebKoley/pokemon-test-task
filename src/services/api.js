import axios from "axios";

export const api = () => {
   const _baseUrl = "https://pokeapi.co/api/v2/";
   const _basePokemonsLimit = 10;
   const _basePokemonsOffset = 0;

   const _getRequestConig = {
      method: "GET",
      baseURL: _baseUrl,
      headers: {
         "Content-Type": "application/json",
      },
      params: { limit: _basePokemonsLimit, offset: _basePokemonsOffset },
   };

   const apiRequest = axios.create(_getRequestConig);

   const _transformPokemonData = (pokemon) => {
      return {
         name: pokemon.name,
         sprites: pokemon.sprites.other.home.front_shiny,
         moves: pokemon.moves.length,
         id: pokemon.id,
         height: pokemon.height,
         attackStats: pokemon.stats.find((pokemon) => pokemon.stat.name === "attack").base_stat,
      };
   };

   return { apiRequest, _transformPokemonData };
};
