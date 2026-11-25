import type { PokemonListItem } from "../types/pokemon";

export const formatName = (name: string): string =>
  name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getPokemonId = (pokemon: PokemonListItem): number | null => {
  const match = pokemon.url.match(/\/pokemon\/(\d+)\/?$/);
  const idText = match?.[1];
  if (!idText) return null;
  return Number(idText);
};

export const formatId = (id: number): string => `#${String(id).padStart(4, "0")}`;

export const spriteUrl = (id: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
