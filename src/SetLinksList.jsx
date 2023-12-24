import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCount, setListOfLinks } from './Redux/slices/dataSlice';

const SetLinksList = () => {
  const dispatch = useDispatch();
  const pokemonDataFromStore = useSelector((state) => state.pokemon.pokemonData);
 
  useEffect(() => {
    if (pokemonDataFromStore) {
      dispatch(setCount(pokemonDataFromStore.count));

      const extractedData = pokemonDataFromStore?.pokemon || pokemonDataFromStore?.results;

      if (extractedData) {
        const newUrlArray = extractedData.slice(0,30).map((link) => (link.url || link.pokemon.url));

        dispatch(setListOfLinks(newUrlArray));

      } else {
        console.error('Pokemon data not found in expected format');
      }
    }
  }, [pokemonDataFromStore, dispatch]); // Ensure dependencies are correct


  return (
    <div></div>
  );
};

export default SetLinksList;