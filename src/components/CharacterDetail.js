import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  return props.selectedCharacter ? (
    <div>
      <Link to={'/'}>
        <p>Volver</p>
      </Link>
      <img
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      />
      <p>Nombre: {props.selectedCharacter.name}</p>
      <p>Especie: {props.selectedCharacter.species}</p>
      <p>Planeta de origen: {props.selectedCharacter.origin.name}</p>
      <p>Número de episodios: {props.selectedCharacter.episode.length}</p>
      <p>Estado: {props.selectedCharacter.status}</p>
    </div>
  ) : (
    'Cargando...'
  );
};

export default CharacterDetail;
