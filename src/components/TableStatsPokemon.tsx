import { type PokemonStat, type StatName } from "../types/pokemon";

const labels: Record<StatName, string> = {
  hp: "PS",
  attack: "Ataque",
  defense: "Defensa",
  "special-attack": "At. especial",
  "special-defense": "Def. especial",
  speed: "Velocidad",
};

const maxByStat: Record<StatName, number> = {
  hp: 255,
  attack: 190,
  defense: 230,
  "special-attack": 194,
  "special-defense": 230,
  speed: 200,
};

type TableStatsPokemonProps = {
  stats: PokemonStat[];
};

const TableStatsPokemon = ({ stats }: TableStatsPokemonProps) => {
  const total = stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  return (
    <div>
      {stats.map(({ base_stat, stat }) => {
        const max = maxByStat[stat.name];
        const percent = Math.min(100, (base_stat / max) * 100);
        const tone = percent <= 35 ? "low" : percent <= 60 ? "mid" : "high";
        return (
          <div className="stat-row" key={stat.name}>
            <header>
              <span>{labels[stat.name]}</span>
              <strong>{base_stat}</strong>
            </header>
            <div className="track">
              <div className={`fill ${tone}`} style={{ width: `${percent}%` }} />
            </div>
          </div>
        );
      })}
      <div className="total">
        <span>Total</span>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default TableStatsPokemon;
