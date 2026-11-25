import { useMemo, useState } from "react";
import Loading from "../components/Loading";
import { useGetPokemons } from "../hooks/useGetPokemons";
import ScrollToTop from "../components/ScrollToTop";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import PokemonExplorer from "../components/PokemonExplorer";

const HomePage = () => {
  const { data, isLoading, isError, error } = useGetPokemons();
  const [searchValue, setSearchValue] = useState("");
  const pokemons = data?.results ?? [];

  const filteredPokemons = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return pokemons;
    return pokemons.filter((pokemon) => pokemon.name.includes(query));
  }, [pokemons, searchValue]);

  if (isLoading) {
    return (
      <div className="boot" role="status">
        <img src="/logo.svg" alt="Pokémon" className="boot-logo" />
        <Loading />
        <p>Cargando Pokédex</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="boot">
        <img src="/logo.svg" alt="Pokémon" className="boot-logo" />
        <ErrorMessage error={error.message} />
      </div>
    );
  }

  return (
    <main className="pokedex">
      <header className="pokedex-header">
        <img src="/logo.svg" alt="Pokémon" className="pokedex-logo" />
        <div>
          <p className="eyebrow">Pokédex</p>
          <h1>Elige un Pokémon</h1>
          <p className="lead">Busca por nombre y abre su ficha: tipos, altura, peso y estadísticas.</p>
        </div>
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </header>
      <PokemonExplorer pokemons={filteredPokemons} />
      <ScrollToTop />
    </main>
  );
};

export default HomePage;
