import React from 'react';
import '../stylesheets/_filterCharacters.scss'
import PropTypes from 'prop-types';

const handleChange = (props, ev) => {
  const inputText = ev.target.value;
  return props.handleFilter(inputText);
};

const FilterCharacters = props => {
  return (
    <div className='input_container'>
      <input
        type="text"
        value={props.filterText}
        onChange={handleChange.bind(null, props)}
        className='input'
        placeholder='Who are you looking for?'
      />
    </div>
  );
};

FilterCharacters.propTypes = {
  handleFilter: PropTypes.func,
  filterText: PropTypes.string
};

export default FilterCharacters;
