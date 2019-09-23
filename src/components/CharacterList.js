import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const listCharacters = props => {
  let filteredCharacters = props.characters
  .filter(character =>
    character.name.toLowerCase().includes(props.filterText.toLowerCase())
  )
  
  return props.filterText === '' || filteredCharacters.length > 0 ? filteredCharacters.map(character => {
      return (
        <li key={character.id}>
          <Link to={`/detail/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        </li>
      );
    }) : <p>¡Vaya! No hay resultados con ese nombre.</p>
};

const CharacterList = props => {
  return <ul>{listCharacters(props)}</ul>;
};

export default CharacterList;
