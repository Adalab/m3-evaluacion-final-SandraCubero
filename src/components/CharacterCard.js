import React from 'react';
import '../stylesheets/_characterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  const { image, name, species } = props.character;
  return (
    <div className="card">
      <img src={image} alt={name} className="card_img" />
      <div className="card_text-container">
        <p className="card_title">{name}</p>
        <p className="card_text">{species}</p>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object
};

export default CharacterCard;
