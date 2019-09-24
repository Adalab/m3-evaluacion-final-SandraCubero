import React from 'react';
import FilterCharacters from './FilterCharacters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <React.Fragment>
      <FilterCharacters
        handleFilter={props.handleFilter}
        filterText={props.filterText}
      />
      <CharacterList characters={props.characters} />
    </React.Fragment>
  );
};

Home.propTypes = {
  characters: PropTypes.array,
  handleFilter: PropTypes.func,
  filterhText: PropTypes.string
};

export default Home;
