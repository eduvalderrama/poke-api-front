import { useState } from "react";
import AccordionPokemon from "../components/AccordionPokemon";
import Loading from "../components/Loading";
import { useGetPokemons } from "../hooks/useGetPokemons";
import ScrollToTop from "../components/ScrollToTop";

const HomePage = () => {
  const { data, isLoading } = useGetPokemons();
  const [ searchValue, setSearchValue ] = useState();
  const { results: pokemons } = data || {};
  const filteredPokemons = searchValue ? pokemons?.filter((pokemon) => pokemon.name.includes(searchValue)) : pokemons;

  const handleSearch = ((e) => {
    setSearchValue(e.target.value)
  })


  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 p-5">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center w-100 mb-4 mt-4">
              <h2>{`Total: ${filteredPokemons?.length}`}</h2>
              <img src='/logo.jpg' alt="Pokeball" style={{ width: '18rem', height: 'auto', objectFit: 'contain', background: 'transparent' }} />
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" onChange={handleSearch} placeholder="Search" aria-label="Search" />
              </form>
            </div>
            <AccordionPokemon pokemons={filteredPokemons} />
            <ScrollToTop />
        </>
      )}
  </div>
  );
};

export default HomePage;
