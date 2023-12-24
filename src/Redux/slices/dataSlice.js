import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  listOfLinks: [],
  listOfIds: [],
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
      console.log( action.payload)
    },
    setListOfIds: (state, action) =>{
      state.listOfIds = action.payload;
    },

  },
});

export const { setCount, setListOfLinks, setListOfCards, setListOfIds} = dataSlice.actions;

export default dataSlice.reducer;
