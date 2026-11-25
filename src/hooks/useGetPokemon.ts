import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/services";
import type { PokemonDetail } from "../types/pokemon";

export const useGetPokemon = (name: string | undefined) => {
  return useQuery<PokemonDetail, Error>({
    queryKey: ["pokemon", name],
    queryFn: () => {
      if (!name) {
        return Promise.reject(new Error("Falta el nombre del Pokémon"));
      }
      return getPokemon(name);
    },
    enabled: Boolean(name),
  });
};
