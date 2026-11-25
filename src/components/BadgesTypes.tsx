import { POKEMON_TYPES, type PokemonTypeName, type PokemonTypeSlot } from "../types/pokemon";

const typeColors: Record<PokemonTypeName, string> = {
  normal: "#aa9",
  fire: "#f42",
  water: "#39f",
  electric: "#fc3",
  grass: "#7c5",
  ice: "#6cf",
  fighting: "#b54",
  poison: "#a59",
  ground: "#db5",
  flying: "#89f",
  psychic: "#f59",
  bug: "#ab2",
  rock: "#ba6",
  ghost: "#66b",
  dragon: "#7160e2",
  dark: "#754",
  steel: "#aab",
  fairy: "#e9e",
};

const lightText = new Set<PokemonTypeName>(["fighting", "poison", "ghost", "dark", "dragon"]);

const isPokemonTypeName = (name: string): name is PokemonTypeName =>
  POKEMON_TYPES.some((typeName) => typeName === name);

type BadgesTypesProps = {
  types: PokemonTypeSlot[];
};

const BadgesTypes = ({ types }: BadgesTypesProps) => {
  return (
    <div className="meta">
      {types.map(({ type }) => {
        const known = isPokemonTypeName(type.name);
        return (
          <span
            key={type.name}
            className="type-badge"
            style={{
              background: known ? typeColors[type.name] : "#ddd",
              color: known && lightText.has(type.name) ? "#fff" : "#1c140c",
            }}
          >
            {type.name.toUpperCase()}
          </span>
        );
      })}
    </div>
  );
};

export default BadgesTypes;
