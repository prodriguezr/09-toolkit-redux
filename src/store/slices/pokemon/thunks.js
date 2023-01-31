import { pokeApi } from '../../../api/pokeApi';
import { setPokemons, startLoading } from './pokemonSlice';

const defaultLimit = import.meta.env.VITE_RECORDS_PER_PAGE;

export const getPokemons = (page = 0, limit = defaultLimit) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const { data } = await pokeApi.get(
      `/pokemon?limit=${limit}&offset=${page * 10}`
    );

    dispatch(
      setPokemons({
        page: page + 1,
        pokemons: data.results,
      })
    );
  };
};
