import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    query: '',
    pokemonData: null,
    pokemonImage: null,
    error: null,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setPokemonData(state, action) {
            state.pokemonData = action.payload;
        },
        setPokemonImage(state, action) {
            state.pokemonImage = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setQuery, setPokemonData, setPokemonImage, setError } = pokemonSlice.actions;
export default pokemonSlice.reducer;
