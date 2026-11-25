import axios from "axios";
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

const API = "https://pokeapi.co/api/v2";

export const getPokemons = async (): Promise<PokemonListResponse> => {
  const response = await axios.get<PokemonListResponse>(
    `${API}/pokemon?limit=100000&offset=0`,
  );
  return response.data;
};

export const getPokemon = async (name: string): Promise<PokemonDetail> => {
  const response = await axios.get<PokemonDetail>(`${API}/pokemon/${name}`);
  return response.data;
};
