import React from 'react';
import { useDispatch } from 'react-redux';
import { setListOfCards, setListOfIds } from './Redux/slices/dataSlice';
import { useEffect } from 'react';

const OrganiseCardData = (props) => {

    const originalData =props.cards;
    const dispatch = useDispatch();

    const finalArray = [];
    const cardIds = [];

    originalData.forEach((cardData) => {
    const reducedData = {
        height: cardData.height,
        id: cardData.id,
        name: cardData.name,
        species: {
        name: cardData.species.name,
        },
        stats: cardData.stats.map((stat) => ({
        base_stat: stat.base_stat,
        name: stat.stat.name,
        })),
        types: cardData.types.map((type) => type.type.name),
        weight: cardData.weight,
        abilities: cardData.abilities.map((ability) => ability.ability.name),
    };

    const createCardIdsArray = (data) => {
      const ids = data.map((card) => card.id);
      return ids;
    };

    finalArray.push(reducedData);
    cardIds.push(reducedData.id);
    // console.log(cardIds);
    


    });
    useEffect(() => {
      dispatch(setListOfCards(finalArray));
      dispatch(setListOfIds(cardIds));
       // Dispatch here after rendering
    }, [finalArray]); // Re-dispatch when finalArray changes
  

  return (
    <div></div>
  )
}

export default OrganiseCardData