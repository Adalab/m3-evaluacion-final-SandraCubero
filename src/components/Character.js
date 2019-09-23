import React from 'react';

const Character = props => {
  return (
    <div>
      <img src={props.character.origin.url} alt={props.character.name} />
      <p>{props.character.name}</p>
      <p>{props.character.species}</p>
    </div>
  );
};

export default Character;
