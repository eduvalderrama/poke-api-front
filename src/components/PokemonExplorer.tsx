import { useEffect, useMemo, useRef, useState } from "react";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { formatId, formatName, getPokemonId, spriteUrl } from "../utils";
import ImageInfoPokemonCard from "./ImageInfoPokemonCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import type { PokemonListItem } from "../types/pokemon";

const PAGE_SIZE = 24;

type PokemonExplorerProps = {
  pokemons: PokemonListItem[];
};

const PokemonExplorer = ({ pokemons }: PokemonExplorerProps) => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string | undefined>(pokemons[0]?.name);
  const detailRef = useRef<HTMLElement | null>(null);

  const choose = (name: string) => {
    setSelected(name);
    if (window.matchMedia("(max-width: 900px)").matches) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    setPage(1);
  }, [pokemons]);

  useEffect(() => {
    const first = pokemons[0];
    if (!first) return;
    if (!pokemons.some((pokemon) => pokemon.name === selected)) {
      setSelected(first.name);
    }
  }, [pokemons, selected]);

  const pages = Math.max(1, Math.ceil(pokemons.length / PAGE_SIZE));
  const safePage = Math.min(page, pages);
  const visible = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return pokemons.slice(start, start + PAGE_SIZE);
  }, [pokemons, safePage]);

  const { data, isFetching, isError, error } = useGetPokemon(selected);

  if (!pokemons.length) {
    return (
      <div className="empty" role="status">
        <h2>Sin resultados</h2>
        <p>Prueba con otro nombre.</p>
      </div>
    );
  }

  return (
    <div className="layout">
      <section>
        <div className="toolbar">
          <span>{pokemons.length} Pokémon</span>
          <span>Página {safePage} de {pages}</span>
        </div>
        <div className="grid">
          {visible.map((pokemon) => {
            const id = getPokemonId(pokemon);
            const active = pokemon.name === selected;
            return (
              <button
                key={pokemon.name}
                type="button"
                className={`pokemon-card ${active ? "is-selected" : ""}`}
                aria-pressed={active}
                aria-controls="ficha-pokemon"
                onClick={() => choose(pokemon.name)}
              >
                <div className="art">
                  {id !== null && <img src={spriteUrl(id)} alt="" />}
                </div>
                <span className="num">{id !== null ? formatId(id) : ""}</span>
                <strong>{formatName(pokemon.name)}</strong>
              </button>
            );
          })}
        </div>
        <div className="pager">
          <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={safePage === 1}>
            Anterior
          </button>
          <button type="button" onClick={() => setPage((value) => Math.min(pages, value + 1))} disabled={safePage === pages}>
            Siguiente
          </button>
        </div>
      </section>
      <aside
        id="ficha-pokemon"
        className={`detail ${isFetching && !data ? "is-loading" : ""}`}
        ref={detailRef}
        aria-live="polite"
        aria-busy={isFetching && !data}
      >
        {isFetching && !data ? (
          <div className="d-flex justify-content-center align-items-center h-100"><Loading /></div>
        ) : isError ? (
          <ErrorMessage error={error.message} />
        ) : data ? (
          <ImageInfoPokemonCard key={data.id} pokemon={data} />
        ) : null}
      </aside>
    </div>
  );
};

export default PokemonExplorer;
