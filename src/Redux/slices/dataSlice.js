import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  listOfLinks: [],
  listOfCards: [],
};

const dataSlice = createSlice({
  name: 'data', // Use a descriptive name if possible
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setListOfLinks: (state, action) => {
      state.listOfLinks = action.payload;
    },
    setListOfCards: (state, action) => {
      state.listOfCards = action.payload;
    },
  },
});

export const { setCount, setListOfLinks, setListOfCards } = dataSlice.actions;

export default dataSlice.reducer;
