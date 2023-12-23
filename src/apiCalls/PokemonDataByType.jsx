import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemonDataByTypeStart,
  fetchPokemonDataByTypeSuccess,
  fetchPokemonDataByTypeFailure,
} from '../Redux/slices/pokemonSlice';

const PokemonDataByType = () => {
  const dispatch = useDispatch();

  const type = useSelector((state) => state.pokemon.pokemonType);

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
        fetchPokemonDataByTypeSuccess(data);
        console.log(data);

        // Fetch Pokemon image using the Pokemon's ID
        // fetchPokemonImage(data.id);
      } else {
        fetchPokemonDataByTypeFailure(response);
      }
    } catch (error) {
      fetchPokemonDataByTypeFailure(error);
    }
  };

  useEffect(() => {
    if (type) {
      dispatch(fetchPokemonDataByTypeStart());
      const apiUrl = `https://pokeapi.co/api/v2/type/${type}`; 
      fetchPokemon(apiUrl);
    }
  }, [type, dispatch]);

  return null

};

export default PokemonDataByType;
