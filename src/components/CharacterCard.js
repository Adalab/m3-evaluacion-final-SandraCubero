import React from 'react';
const picStyle = {
  height : '200px'
}
const CharacterCard = props => {
  return (
    <div>
      <img src={props.character.image} alt={props.character.name} style={picStyle} />
      <p>{props.character.name}</p>
      <p>{props.character.species}</p>
    </div>
  );
};

export default CharacterCard;
