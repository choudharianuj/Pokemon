import React from 'react';
import { useDispatch } from 'react-redux';
import { setListOfCards } from './Redux/slices/dataSlice';

const OrganiseCardData = (props) => {

    const originalData =props.cards;
    const dispatch = useDispatch();

    const finalArray = [];

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

    finalArray.push(reducedData);

    });
    
    dispatch(setListOfCards(finalArray));

  return (
    <div></div>
  )
}

export default OrganiseCardData