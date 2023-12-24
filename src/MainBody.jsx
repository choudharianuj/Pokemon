import React from 'react';
import PokemonDataByType from './apiCalls/PokemonData';
import SetLinksList from './SetLinksList';
import FetchAndStoreCards from './FetchAndStoreCards'

const MainBody = () => {
  return (
    <main>
      <PokemonDataByType/>
      <SetLinksList />
      <FetchAndStoreCards />
    </main>
  );
};

export default MainBody;
