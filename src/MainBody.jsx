import React from 'react';
import PokemonDataByType from './apiCalls/PokemonData';
import SetLinksList from './SetLinksList';
import FetchAndStoreCards from './FetchAndStoreCards'
import PokemonImage from './apiCalls/PokemonImage';

const MainBody = () => {
  return (
    <main>
      <PokemonDataByType/>
      <SetLinksList />
      <FetchAndStoreCards />
      <PokemonImage />
    </main>
  );
};

export default MainBody;
