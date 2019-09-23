import React from 'react';
import CharacterCard from './CharacterCard';

const listCharacters = props => {
  return props.characters
  .filter(character =>
    character.name.toLowerCase().includes(props.filterText.toLowerCase())
    )
  .map(character => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
};

const CharacterList = props => {
  return <ul>{listCharacters(props)}</ul>;
};

export default CharacterList;
