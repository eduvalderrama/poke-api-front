type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <form className="search" onSubmit={(event) => event.preventDefault()}>
      <span aria-hidden="true">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por nombre"
        aria-label="Buscar Pokémon"
      />
    </form>
  );
};

export default SearchBar;
