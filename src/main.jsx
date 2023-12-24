import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './Redux/slices/pokemonSlice'; // Adjust path as needed
import dataReducer from './Redux/slices/dataSlice'; // Adjust path as needed
import App from './App'; // Import the App component

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer, // Register the pokemon slice reducer
    data: dataReducer, // Register the data slice reducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
