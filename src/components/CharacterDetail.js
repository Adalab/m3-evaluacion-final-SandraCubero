import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  return props.selectedCharacter ? (
    <div>
      <Link to={'/'}>
        <p>&lt; Back</p>
      </Link>
      <img
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      />
      <p>Name: {props.selectedCharacter.name}</p>
      <p>
        Species:{' '}
        {props.selectedCharacter.species.toLowerCase() === 'human' ? (
          <span>
            Human <i className="fas fa-child" title="Human"></i>
          </span>
        ) : (
          <span>
            Alien <i className="fab fa-reddit-alien" title="Alien"></i>
          </span>
        )}
      </p>

      <p>Origin: {props.selectedCharacter.origin.name}</p>
      <p>Episodes: {props.selectedCharacter.episode.length}</p>
      <p>
        Status: {props.selectedCharacter.status.toLowerCase() === 'alive' ? (
          <i className="fas fa-heartbeat" title="Alive"></i>
        ) : props.selectedCharacter.status.toLowerCase() === 'dead' ? (
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
        <p>&lt;  Back to the list</p>
      </Link>
    </div>
  );
};

export default CharacterDetail;
