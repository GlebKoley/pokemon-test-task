import { useCallback } from "react";
import { api } from "../services/api";

export const useGetPokemonsList = () => {
   const { apiRequest } = api();

   const getPokemonsList = useCallback(async () => {
      const data = await apiRequest
         .get("pokemon")
         .then((res) => res.data.results)
         .catch((error) => {
            return error.toJSON();
         });
      return data;
   }, []);

   return { getPokemonsList };
};
