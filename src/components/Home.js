import React from 'react';
import FilterCharacters from './FilterCharacters';
import CharacterList from './CharacterList';

const Home = props => {
  return (
    <React.Fragment>
      <FilterCharacters
        handleFilter={props.handleFilter}
        filterText={props.filterText}
      />
      <CharacterList
        characters={props.characters}
        filterText={props.filterText}
      />
    </React.Fragment>
  );
};

export default Home;
