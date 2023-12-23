import React, { useState, useEffect } from 'react';

const TypeSelector = ({ types, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a Pokemon Type</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

const PokemonList = ({ pokemonList }) => {
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

const PokemonTypeFetcher = () => {
  const [selectedType, setSelectedType] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  const types = [
    'bug', 'grass', 'dark', 'rock', 'dragon', 'electric', 'fairy',
    'fighting', 'fire', 'flying', 'ghost', 'ground', 'ice', 'normal',
    'poison', 'steel', 'water', 'psychic'
  ];

  useEffect(() => {
    const fetchPokemonByType = async () => {
      if (selectedType) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
          if (response.ok) {
            const data = await response.json();
            setPokemonList(data.pokemon.map((entry) => entry.pokemon));
            setError(null);
          } else {
            setPokemonList([]);
            setError('Error fetching Pokemon data.');
          }
        } catch (error) {
          console.error('Error fetching Pokemon:', error);
          setPokemonList([]);
          setError('An error occurred while fetching Pokemon data.');
        }
      }
    };

    fetchPokemonByType();
  }, [selectedType]);

  return (
    <div>
      <TypeSelector types={types} onSelect={setSelectedType} />
      {selectedType && <h2>Pokemon of type {selectedType}</h2>}
      {pokemonList.length > 0 && <PokemonList pokemonList={pokemonList} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PokemonTypeFetcher;