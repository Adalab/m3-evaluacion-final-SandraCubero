import React from 'react';
import '../stylesheets/_characterList.scss'
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const listCharacters = props => {
  return props.characters ? (
    props.characters.length > 0 ? (
      props.characters.map(character => {
        return (
          <li className='card' key={character.id}>
            <Link className='link' to={`/detail/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        );
      })
    ) : (
      <p>Ops! There aren't results. Try with another name</p>
    )
  ) : (
    <p>Loading...</p>
  );
};

const CharacterList = props => {
  return <ul className="list">{listCharacters(props)}</ul>;
};

listCharacters.propTypes = {
  characters: PropTypes.array
};

export default CharacterList;
