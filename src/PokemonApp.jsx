import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';
import { PokemonList } from './components';

export const PokemonApp = () => {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      {isLoading && <p>Loading ...</p>}

      <PokemonList pokemons={pokemons} />

      <button
        onClick={() => {
          dispatch(getPokemons(page + 1));
        }}
        className='margin-right: 2px'
      >
        Next Page
      </button>
    </>
  );
};
