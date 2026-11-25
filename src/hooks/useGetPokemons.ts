import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/services";
import type { PokemonListResponse } from "../types/pokemon";

export const useGetPokemons = () => {
  return useQuery<PokemonListResponse, Error>({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
};
