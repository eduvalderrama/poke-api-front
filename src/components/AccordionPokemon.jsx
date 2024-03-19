import { useEffect, useState } from "react";
import { formatName } from "../utils";
import { useGetPokemon } from "../hooks/useGetPokemon";
import Loading from "./Loading";
import ImageInfoPokemonCard from "./ImageInfoPokemonCard";
import ErrorMessage from "./ErrorMessage";

const AccordionPokemon = ({ pokemons }) => {
  const [ selectedPokemon, setSelectedPokemon ] = useState(pokemons[0]?.name);
  const { data, isFetching, isLoading, refetch, isError, error } = useGetPokemon(selectedPokemon) || {};

  const selectPokemon = ((e) => {
    setSelectedPokemon(e.target.value)
  })

  useEffect (() => {
    refetch();
  }, [selectedPokemon])

  return (
    <div className="accordion mt-4" style={{ width: '100%' }} id="accordionExample">
        {
          pokemons?.map((pokemon, index) => {
            const validateSelectPokemon = selectedPokemon === pokemon?.name;
            return (
              <div key={index} className="accordion-item">
                <h2 className={`accordion-header ${ validateSelectPokemon ? 'disabled' : '' }`} id={`heading${index + 1}`}>
                  <button 
                    value={pokemon.name} 
                    onClick={(e) => {
                      selectPokemon(e)
                    }} 
                    className={`accordion-button ${ validateSelectPokemon ? '' : 'collapsed'}`} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapseTwo${index + 1}`} 
                    aria-expanded={ true } 
                    aria-controls={`collapse${index + 1}`}
                    disabled={ validateSelectPokemon || isFetching || isLoading }
                  >
                    {formatName(pokemon.name)}
                  </button>
                </h2>
                {(isFetching || isLoading) && validateSelectPokemon ? (
                    <div id="collapseOne" className="accordion-collapse collapse show w-100" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="d-flex justify-content-center align-items-center">
                          <Loading></Loading>
                        </div>
                      </div>
                    </div>
                  ) : (
                    isError && validateSelectPokemon ? (
                      <ErrorMessage error={error.message} />
                    ) : (
                      (data && validateSelectPokemon) && (
                        <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body" >
                            <ImageInfoPokemonCard sprites={data?.sprites} stats={data?.stats} height={data?.height} weight={data?.weight} types={data.types}/>
                          </div>
                        </div>
                      )
                    )
                  )}
              </div>
            )
          })
        }
    </div>
  )
}

export default AccordionPokemon;