import React, { useState, useEffect } from 'react';

const PokemonSearch = () => {
  const [query, setQuery] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async (searchQuery) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchQuery}`;

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
        setPokemonData(data);
        setError(null);

        // Fetch Pokemon image using the Pokemon's ID
        fetchPokemonImage(data.id);
      } else {
        setPokemonData(null);
        setError('Pokemon not found. Please enter a valid ID or name.');
      }
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setPokemonData(null);
      setError('An error occurred while fetching Pokemon data.');
    }
  };

  const fetchPokemonImage = async (id) => {
    const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

    try {
      const imageResponse = await fetch(imageUrl);
      if (imageResponse.ok) {
        const image = await imageResponse.text();
        setPokemonImage(image);
      } else {
        setPokemonImage(null);
        console.error('Error fetching Pokemon image:', imageResponse.statusText);
      }
    } catch (error) {
      console.error('Error fetching Pokemon image:', error);
      setPokemonImage(null);
    }
  };

  useEffect(() => {
    // Use useEffect to trigger the API call on each keystroke
    if(query){
    const delayTimer = setTimeout(() => {
      fetchPokemon(query);
    }, 500); // Adjust the delay based on your preference (e.g., 500ms)

    return () => clearTimeout(delayTimer); // Clear the timer on component unmount or when query changes
}}, [query]);

  return (
    <div>
      <form>
          <input
            type="text"
            value={query}
            placeholder='Search by ID'
            onChange={(e) => setQuery(e.target.value)}
          />
      </form>

      {pokemonData && (
        <div>
          <p>Name: {pokemonData.name}</p>
          <p>ID: {pokemonData.id}</p>
        </div>
      )}

      {pokemonImage && (
        <div>
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(pokemonImage)}`}
            alt="Pokemon"
          />
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PokemonSearch;
