import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemonDataStart,
  fetchPokemonDataSuccess,
  fetchPokemonDataFailure,
} from '../Redux/slices/pokemonSlice';

const PokemonData = () => {

  const dispatch = useDispatch();
  const type = useSelector((state) => state.pokemon.pokemonType);
  const query = useSelector((state) => state.pokemon.query);

  const fetchPokemon = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {

        const data = await response.json();
        dispatch(fetchPokemonDataSuccess(data));
      } 
    } catch (error) {
      dispatch(fetchPokemonDataFailure(error));
    }
  };

  useEffect(() => {

    dispatch(fetchPokemonDataStart());
    let apiUrl = null;
    if (type) {

       apiUrl = `https://pokeapi.co/api/v2/type/${type}`; 
    }
    else{

       apiUrl = `https://pokeapi.co/api/v2/pokemon/${query}`;
      
    }
    fetchPokemon(apiUrl);
  }, [ type, query, dispatch ]);

  return null

};

export default PokemonData;
