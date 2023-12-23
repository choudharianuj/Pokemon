// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './features/pokemonSlice'; // Adjust path as needed
import App from './App'; // Import the App component

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer, // Register the slice reducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
