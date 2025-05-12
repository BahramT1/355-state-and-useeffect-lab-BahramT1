import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import './App.css';

function App() {
  const [pokemon, setPokemon]       = useState([]);
  const [offset, setOffset]         = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected]     = useState(null);

  const fetchPage = async () => {
    const res  = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    );
    const data = await res.json();
    setPokemon(data.results);
    setTotalCount(data.count);
  };

  //useEffect just calls fetchPage when offset changes
  useEffect(() => {
    fetchPage();
  }, [offset]);
  
  const fetchSingle = async (url) => {
    const res  = await fetch(url);
    const data = await res.json();
    setSelected(data);
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Pokémon List</h1>

      <div className="list-and-pagination">
        <PokemonList list={pokemon} onSelect={fetchSingle} />
        <Pagination
          offset={offset}
          setOffset={setOffset}
          totalCount={totalCount}
        />
      </div>

      {selected && <PokemonDetails pokemon={selected} />}
    </div>
  );
}

export default App;
