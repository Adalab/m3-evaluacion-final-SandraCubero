import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const listCharacters = props => {
  return props.characters
    .filter(character =>
      character.name.toLowerCase().includes(props.filterText.toLowerCase())
    )
    .map(character => {
      return (
        <li key={character.id}>
          <Link to={`/detail/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        </li>
      );
    });
};

const CharacterList = props => {
  return <ul>{listCharacters(props)}</ul>;
};

export default CharacterList;
