import React from 'react';

const CharacterCard = props => {
  return (
    <div>
      <img src={props.character.image} alt={props.character.name} />
      <p>{props.character.name}</p>
      <p>{props.character.species}</p>
    </div>
  );
};

export default CharacterCard;
