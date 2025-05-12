import React from 'react';

function PokemonItem({ pokemon, onSelect }) {
  return (
    <div className="pokemon-item">
      <button onClick={() => onSelect(pokemon.url)}>
        {pokemon.name}
      </button>
    </div>
  );
}
export default PokemonItem;