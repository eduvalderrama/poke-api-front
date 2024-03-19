import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/services";

export const useGetPokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
};
