const BadgesTypes = ( {types} ) => {
  const colorBagge = {
    'normal': '#aa9',
    'fire': '#f42',
    'water': '#39f',
    'electric': '#fc3',
    'grass': '#7c5',
    'ice': '#6cf',
    'fighting': '#b54',
    'poison': '#a59',
    'ground': '#db5',
    'flying': '#89f',
    'psychic': '#f59',
    'bug': '#ab2',
    'rock': '#ba6',
    'ghost': '#66b',
    'dragon': '#76e',
    'dark': '#754',
    'steel': '#aab',
    'fairy': '#e9e'
  }

  return (
    <>
      {
        types?.map(({ type }, index) => {
          return (
            <h4 key={index}>
              <span className="badge" style={{background: colorBagge[type.name]}}>{type.name.toUpperCase()}</span>
            </h4>
          )
        })
      }
    </>
  )
}

export default BadgesTypes;