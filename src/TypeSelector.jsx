import React from 'react';
import { useDispatch } from 'react-redux';
import { setType } from './Redux/slices/pokemonSlice';


const TypeSelector = () => {

  const dispatch = useDispatch();

  const pokemonTypes = [
    'bug', 'grass', 'dark', 'rock', 'dragon', 'electric', 'fairy',
    'fighting', 'fire', 'flying', 'ghost', 'ground', 'ice', 'normal',
    'poison', 'steel', 'water', 'psychic'
  ];


  const handleTypeChange = (event) => {
     const selectedType = event.target.value;
    dispatch(setType(selectedType));
  };


  return (
    <div>
      <select  onChange={handleTypeChange}>
        <option value="">All Types</option>
        {pokemonTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelector;
