import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPokemonImageStart,
  setPokemonImageSuccess,
  setPokemonImageFailure
} from '../Redux/slices/pokemonSlice'; // Assuming actions are defined here

const PokemonImage = () => {
  const dispatch = useDispatch();
  const listOfIds = useSelector((state) => state.data.listOfIds); // Access listOfIds
  // console.log(listOfIds)

  useEffect(() => {
    dispatch(setPokemonImageStart()); // Indicate image fetching start

    const fetchAllImages = async () => {
      const imageUrls = listOfIds.map((id) => {
        const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
        return imageUrl;
      });

      const images = await Promise.all(imageUrls.map(fetchImage)); // Fetch all images concurrently
      dispatch(setPokemonImageSuccess(images)); // Dispatch array of images
      // console.log(images)
    };
    fetchAllImages();
  }, [listOfIds, dispatch]);

};

const fetchImage = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url; // Return the image URL
  } catch (error) {
    dispatch(setPokemonImageFailure(error.message));
  }
};

export default PokemonImage;