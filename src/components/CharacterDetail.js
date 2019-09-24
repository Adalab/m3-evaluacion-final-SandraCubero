import React from 'react';
import '../stylesheets/_characterDetail.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  return props.selectedCharacter ? (
    <div className="container">
      <Link className="link" to={'/'}>
        <p>&lt; Back</p>
      </Link>
      <div className="detail">
        <img
          src={props.selectedCharacter.image}
          alt={props.selectedCharacter.name}
        />
        <div className="detail_description">
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
            Status:{' '}
            {props.selectedCharacter.status.toLowerCase() === 'alive' ? (
              <i className="fas fa-heartbeat" title="Alive"></i>
            ) : props.selectedCharacter.status.toLowerCase() === 'dead' ? (
              <i className="fas fa-skull-crossbones" title="Dead"></i>
            ) : (
              <i className="fas fa-question" title="Unknown"></i>
            )}
          </p>
        </div>
      </div>
   </div>
  ) : (
    <div>
      <p>Ops! It seems there aren't characters here.</p>
      <Link className="link_2" to={'/'}>
        <p>&lt; Back to list</p>
      </Link>
    </div>
  );
};

CharacterDetail.propTypes = {
  selectedCharacter: PropTypes.object
};

export default CharacterDetail;
