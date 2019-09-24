import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  const {image, name, species, origin, episode, status} = props.selectedCharacter;
  return props.selectedCharacter ? (
    <div>
      <Link to={'/'}>
        <p>&lt; Back</p>
      </Link>
      <img src={image} alt={name} />
      <p>Name: {name}</p>
      <p>
        Species:{' '}
        {species.toLowerCase() === 'human' ? (
          <span>
            Human <i className="fas fa-child" title="Human"></i>
          </span>
        ) : (
          <span>
            Alien <i className="fab fa-reddit-alien" title="Alien"></i>
          </span>
        )}
      </p>

      <p>Origin: {origin.name}</p>
      <p>Episodes: {episode.length}</p>
      <p>
        Status:{' '}
        {status.toLowerCase() === 'alive' ? (
          <i className="fas fa-heartbeat" title="Alive"></i>
        ) : status.toLowerCase() === 'dead' ? (
          <i className="fas fa-skull-crossbones" title="Dead"></i>
        ) : (
          <i className="fas fa-question" title="Unknown"></i>
        )}
      </p>
    </div>
  ) : (
    <div>
      <p>We've not found results</p>
      <Link to={'/'}>
        <p>&lt; Back to list</p>
      </Link>
    </div>
  );
};

CharacterDetail.propTypes = {
  selectedCharacter: PropTypes.object
};

export default CharacterDetail;
