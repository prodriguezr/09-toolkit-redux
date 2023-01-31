import PropTypes from 'prop-types';

export const Pokemon = ({ pokemon: { name } }) => {
  return <li>{name}</li>;
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
