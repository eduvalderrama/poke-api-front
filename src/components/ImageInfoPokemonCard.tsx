import { useState } from "react";
import TableStatsPokemon from "./TableStatsPokemon";
import BadgesTypes from "./BadgesTypes";
import { formatId, formatName } from "../utils";
import type { PokemonDetail, PokemonSprites } from "../types/pokemon";

const artwork = (sprites: PokemonSprites, shiny: boolean): string | null => {
  const official = sprites.other["official-artwork"];
  if (shiny) return official.front_shiny ?? sprites.front_shiny;
  return official.front_default ?? sprites.front_default;
};

type ImageInfoPokemonCardProps = {
  pokemon: PokemonDetail;
};

const ImageInfoPokemonCard = ({ pokemon }: ImageInfoPokemonCardProps) => {
  const [shiny, setShiny] = useState(false);
  const image = artwork(pokemon.sprites, shiny);

  return (
    <>
      <div className="detail-art">
        {image && (
          <img
            src={image}
            alt={shiny ? `${formatName(pokemon.name)} variocolor` : formatName(pokemon.name)}
          />
        )}
      </div>
      <div className="detail-head">
        <h2>{formatName(pokemon.name)}</h2>
        <span>{formatId(pokemon.id)}</span>
      </div>
      <BadgesTypes types={pokemon.types} />
      <div className="meta">
        <span className="pill">Altura {pokemon.height / 10} m</span>
        <span className="pill">Peso {pokemon.weight / 10} kg</span>
        {pokemon.abilities.map(({ ability, is_hidden }) => (
          <span className="pill" key={ability.name}>
            {formatName(ability.name)}
            {is_hidden ? " · oculta" : ""}
          </span>
        ))}
      </div>
      <button
        type="button"
        className={`shiny-btn ${shiny ? "is-on" : ""}`}
        aria-pressed={shiny}
        onClick={() => setShiny((value) => !value)}
      >
        {shiny ? "Ver normal" : "Ver variocolor"}
      </button>
      <div style={{ marginTop: 16 }}>
        <TableStatsPokemon stats={pokemon.stats} />
      </div>
    </>
  );
};

export default ImageInfoPokemonCard;
