import PropTypes from 'prop-types';
import { Pokemon } from './Pokemon';

export const PokemonList = ({ pokemons = [] }) => {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
