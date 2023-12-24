import React from 'react';
import SearchBar from './SearchBar';
import TypeSelector from './TypeSelector';
import './Header.css'

const Header = () => {
  return (
    <header className='Header'>
      <h1>Pokedex</h1>
      <div className='Header-right'>
      <SearchBar />
      <div className='space'></div>
      <TypeSelector />
      </div>
    </header>
  );
};

export default Header;
