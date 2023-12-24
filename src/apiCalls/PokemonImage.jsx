import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPokemonImageStart,
  fetchPokemonImageSuccess,
  fetchPokemonImageFailure,
} from '../Redux/slices/pokemonSlice'; // Assuming actions are defined here

const PokemonImage = () => {

  const dispatch = useDispatch();

  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const image = useSelector((state) => state.pokemon.image);
  // const loading = useSelector((state) => state.pokemon.imageLoading);
  // const error = useSelector((state) => state.pokemon.imageError);

  useEffect(() => {
    if (pokemonData && pokemonData.id && !image) {
      dispatch(fetchPokemonImageStart());
      const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`;

      fetch(imageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          dispatch(fetchPokemonImageSuccess(url));
        })
        .catch((error) => {
          dispatch(fetchPokemonImageFailure(error.message));
        });
    }
  }, [pokemonData, image, dispatch]);

  return null;
};

export default PokemonImage;
