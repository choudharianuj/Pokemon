import React from 'react';
import PokemonDataByQuery from './apiCalls/PokemonDataByQuery';
import PokemonDataByType from './apiCalls/PokemonDataByType';

const MainBody = () => {
  return (
    <main>
      {/* Pokemon list and modal will be rendered here */}
      <PokemonDataByQuery/>
      <PokemonDataByType/>
    </main>
  );
};

export default MainBody;
