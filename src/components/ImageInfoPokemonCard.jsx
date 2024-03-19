import { useState } from "react";
import TableStatsPokemon from "./TableStatsPokemon";
import BadgesTypes from "./BadgesTypes";

const ImageInfoPokemonCard = ({ sprites, stats, height, weight, types }) => {
  const [ shiny, setShiny ] = useState(false);

  const selectShiny = () => {
    setShiny(!shiny);
  }
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center mb-3">
          {
            (sprites?.front_default ||  sprites?.front_shiny) && (
              <img
                src={!shiny ? sprites?.front_default : sprites?.front_shiny}
                className="card-img-top"
                alt="Front Image"
                style={{ width: '18rem' }}
              />
            )
          }
          {
            (sprites?.back_default || sprites?.back_shiny) && (
              <img
                src={!shiny ? sprites?.back_default : sprites?.back_shiny}
                className="card-img-top"
                alt="Back Image"
                style={{ width: '18rem' }}
              />
            )
          }
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <BadgesTypes types={types}/>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <button onClick={selectShiny} type="button" className="btn btn-light">
            {shiny ? 'Normal' : 'Shiny'}
          </button>
          <p className="card-text mb-0">{`Height: ${height/10}m`}</p>
          <p className="card-text mb-0">{`Weight: ${weight/10}kg`}</p>
        </div>
      </div>
        <TableStatsPokemon stats={stats} />
    </div>
  )
}

export default ImageInfoPokemonCard;