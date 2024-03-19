const TableStatsPokemon = ({ stats }) => {
  const totalBaseStat = stats.reduce((total, { base_stat }) => total + base_stat, 0);

 const baseStatsConfig = {
    'hp': 255,
    'attack': 190,
    'defense': 230,
    'special-attack': 194,
    'special-defense': 230,
    'speed': 200,
  };

  return (
    <table className="table table-borderless">
      <tbody>
          {
            stats?.map(({ base_stat, stat }, index) => {
              const max = baseStatsConfig[stat.name] || 0;
              const percent = (base_stat / max) * 100 || 0;
              const progressBarColor = percent <= 35 ? 'danger' : percent <= 60 ? 'warning' : 'success';
              
              return (
                <tr key={index}>
                  <th scope="row" style={{width: '100%'}}>
                    <strong>{`${stat.name} : ${base_stat}`}</strong>
                    <div className="progress">
                      <div className={`progress-bar bg-${progressBarColor}`} role="progressbar" style={{width: `${percent}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </th> 
                </tr>
              )
            })
          }
          <tr>
            <th scope="row" >
              <strong>Total: {totalBaseStat}</strong>
            </th>
        </tr>
      </tbody>
    </table>    
  )
}

export default TableStatsPokemon;