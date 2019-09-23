import React from 'react';
import Character from './Character';

const listCharacters = props => {
  return props.characters.map(character => {
    return (
      <li key={character.id}>
        <Character character={character} />
      </li>
    );
  });
};

const CharacterList = props => {
  return <ul>{listCharacters(props)}</ul>;
};

export default CharacterList;
