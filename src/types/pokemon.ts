export const POKEMON_TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
] as const;

export type PokemonTypeName = (typeof POKEMON_TYPES)[number];

export const STAT_NAMES = [
  "hp",
  "attack",
  "defense",
  "special-attack",
  "special-defense",
  "speed",
] as const;

export type StatName = (typeof STAT_NAMES)[number];

export type NamedApiResource = {
  name: string;
  url: string;
};

export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonTypeSlot = {
  slot: number;
  type: {
    name: PokemonTypeName;
    url: string;
  };
};

export type PokemonAbility = {
  ability: NamedApiResource;
  is_hidden: boolean;
  slot: number;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: StatName;
    url: string;
  };
};

export type OfficialArtwork = {
  front_default: string | null;
  front_shiny: string | null;
};

export type PokemonSprites = {
  front_default: string | null;
  front_shiny: string | null;
  other: {
    "official-artwork": OfficialArtwork;
  };
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonTypeSlot[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
};
