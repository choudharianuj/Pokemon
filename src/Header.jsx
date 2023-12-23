import React from 'react';
import SearchBar from './SearchBar';
import TypeSelector from './TypeSelector';

const Header = () => {
  return (
    <header>
      <h1>Pokedex</h1>
      <SearchBar />
      <TypeSelector />
    </header>
  );
};

export default Header;
