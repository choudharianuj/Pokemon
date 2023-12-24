import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import OrganiseCardData from './OrganiseCardData';


const FetchAndStoreCards = () => {

  const urls = useSelector((state) => state.data.listOfLinks); // Access the list of URLs
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  // console.log(pokemonData) // Access the list of URLs
  const [cards, setCards] = useState([]);


  useEffect(() => {

    if(urls){

      const FetchAndStoreCards = async () => {
        const cards = await Promise.all(
          urls.map(async (url) => {
            try {
              const response = await fetch(url); // Fetch each URL
              const data = await response.json(); // Parse the response
              return data; // Assuming the response contains card data
            } catch (error) {
              console.error('Error fetching card:', error);
              return null; // Handle errors gracefully
            }
          })
        );
          setCards(cards);
          // console.log(cards)
      };
      FetchAndStoreCards();
    }
    else{
      setCards([pokemonData]);
    }
   
   
  }, [urls]); // Dependencies: urls and dispatch

  return (
    <div>
      {cards.length ? (
        <OrganiseCardData cards={cards} />
      ) : (
        <div></div> // Or a loading indicator
      )}
    </div>
  );
};

export default FetchAndStoreCards;
