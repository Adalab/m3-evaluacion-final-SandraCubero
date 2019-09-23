import React from 'react';

const listCharacters = props => {
  return props.characters.map(character => {
    return (
      <li key={character.id}>
        <img src={character.origin.url} alt={character.name}/>
        <p>{character.name}</p>
        <p>{character.species}</p>
      </li>
    )
  })
};

const CharacterList = props => {
  return <ul>{listCharacters(props)}</ul>;
};

export default CharacterList;
