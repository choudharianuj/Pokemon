import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from './Redux/slices/pokemonSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const input = event.target.value;
    dispatch(setQuery(input)); // Update query in Redux state
  };

  return (
    <div className="search-bar">
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Search Pokemon"
      />
    </div>
  );
};

export default SearchBar;
