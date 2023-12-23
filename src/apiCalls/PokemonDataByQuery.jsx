import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemonDataByQueryStart,
  fetchPokemonDataByQuerySuccess,
  fetchPokemonDataByQueryFailure,

} from '../Redux/slices/pokemonSlice';

const PokemonDataByQuery = () => {
  const dispatch = useDispatch();

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
        fetchPokemonDataByQuerySuccess(data);  
  

      } else {
        fetchPokemonDataByQueryFailure(response);
      }
    } catch (error) {
      fetchPokemonDataByQueryFailure(error);
    }
  };



  useEffect(() => {
    if (query) {
      dispatch(fetchPokemonDataByQueryStart()); // Indicate loading
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${query}`;

      console.log(query);
      fetchPokemon(apiUrl);
    }
  }, [query, dispatch]);

  return null;
};

export default PokemonDataByQuery;
