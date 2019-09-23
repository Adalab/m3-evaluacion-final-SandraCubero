import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  return props.selectedCharacter ? (
    <div>
      <Link to={'/'}>
        <p>&lt; Volver</p>
      </Link>
      <img
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      />
      <p>Nombre: {props.selectedCharacter.name}</p>
      <p>Especie: {props.selectedCharacter.species}</p>
      <p>Planeta de origen: {props.selectedCharacter.origin.name}</p>
      <p>Número de episodios: {props.selectedCharacter.episode.length}</p>
      <p>Estado: {props.selectedCharacter.status.toLowerCase()=== 'alive' ? <i className="fas fa-heartbeat" title='Alive'></i> : props.selectedCharacter.status.toLowerCase()=== 'dead' ? <i className="fas fa-skull-crossbones" title='Dead'></i> : <i className="fas fa-question" title='Unknown'></i> }</p>
    </div>
  ) : (
    'Cargando...'
  );
};

export default CharacterDetail;
