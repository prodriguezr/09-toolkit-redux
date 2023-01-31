import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, { payload: { page, pokemons } }) => {
      state.isLoading = false;
      state.page = page;
      state.pokemons = pokemons;
    },
  },
});

export const { startLoading, setPokemons } = pokemonSlice.actions;
