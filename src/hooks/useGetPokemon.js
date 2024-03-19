import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/services";

export const useGetPokemon = (pokemon) => {
  return useQuery({ queryKey: ["pokemon"], queryFn: () => getPokemon(pokemon) });
};
