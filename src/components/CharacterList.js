import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const listCharacters = props => {
  return props.characters ? (
    props.characters.length > 0 ? (
      props.characters.map(character => {
        return (
          <li key={character.id}>
            <Link to={`/detail/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        );
      })
    ) : (
      <p>Ops! There aren't results. Try with another name</p>
    )
  ) : (
    <p>Loading...</p>
  );
};

const CharacterList = props => {
  return <ul className="list">{listCharacters(props)}</ul>;
};

export default CharacterList;
