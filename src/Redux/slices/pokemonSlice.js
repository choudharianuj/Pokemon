import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: null,
  pokemonType: null,
  pokemonDataByQuery: null,
  pokemonDataByType: null,
  loading: false,
  pokemonImage: null,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setQuery: (state, action) => {
        state.pokemonType=null;
        state.query = action.payload;
    },
    setType: (state, action) => {
        state.query = null;
        state.pokemonType = action.payload;
    },
    fetchPokemonDataByTypeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPokemonDataByTypeSuccess: (state, action) => {
      state.pokemonDataByType = action.payload.data;
      console.log(action.payload.data)
      state.loading = false;
    },
    fetchPokemonDataByTypeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPokemonDataByQueryStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPokemonDataByQuerySuccess: (state, action) => {
      state.pokemonDataByQuery = action.payload.data;
      state.loading = false;
    },
    fetchPokemonDataByQueryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPokemonImageStart: (state) => {
        state.loading=true;
        state.error = null;
    }, 
    setPokemonImageSuccess: (state, action) => {
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
  fetchPokemonDataByTypeStart,
  fetchPokemonDataByTypeSuccess,
  fetchPokemonDataByTypeFailure,
  fetchPokemonDataByQueryStart,
  fetchPokemonDataByQuerySuccess,
  fetchPokemonDataByQueryFailure,
  setPokemonImageStart,
  setPokemonImageSuccess,
  setPokemonImageFailure,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
