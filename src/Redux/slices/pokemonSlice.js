import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  pokemonType: null,
  pokemonData: null,
  loading: false,
  pokemonImage: null,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setQuery: (state, action) => {
        state.query = action.payload;
    },
    setType: (state, action) => {
        state.pokemonType = action.payload;
    },
    fetchPokemonDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPokemonDataSuccess: (state, action) => {

      state.pokemonData = action.payload;
      state.loading = false;

    },
    fetchPokemonDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    setPokemonImageStart: (state) => {
        state.loading=true;
        state.error = null;
    }, 
    setPokemonImageSuccess: (state, action) => {
        state.pokemonImage = action.payload;
        state.loading=false;
      
    },
    setPokemonImageFailure: (state, action) => {
        state.loading=false;
        state.error= action.payload;
      // Optionally handle error state here
    },
  },
});

export const {
  setQuery,
  setType,
  fetchPokemonDataStart,
  fetchPokemonDataSuccess,
  fetchPokemonDataFailure,
  setPokemonImageStart,
  setPokemonImageSuccess,
  setPokemonImageFailure,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
