import axios from "axios";

export const getPokemons = async () => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
  );
  return response.data;
};

export const getPokemon = async (pokemon) => {
  throw new Error('No se encontraron pokemones');

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
  );
  return response.data;
};
