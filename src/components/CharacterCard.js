import React from 'react';
import PropTypes from 'prop-types';

const picStyle = {
  height : '200px'
}
const CharacterCard = props => {
  const { image, name, species } = props.character;
  return (
    <div>
      <img src={image} alt={name} style={picStyle} />
      <p>{name}</p>
      <p>{species}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object
};

export default CharacterCard;
