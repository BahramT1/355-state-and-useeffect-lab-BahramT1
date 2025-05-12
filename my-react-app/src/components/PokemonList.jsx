import React from 'react';
import PokemonItem from './PokemonItem';

function PokemonList({ list, onSelect }) {
  return (
    <div className="pokemon-list">
      {list.map(p => (
        <PokemonItem
          key={p.name}
          pokemon={p}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
export default  PokemonList;