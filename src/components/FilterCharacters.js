import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (props, ev) => {
  const inputText = ev.target.value;
  return props.handleFilter(inputText);
};

const FilterCharacters = props => {
  return (
    <div>
      <input
        type="text"
        value={props.filterText}
        onChange={handleChange.bind(null, props)}
      />
    </div>
  );
};

FilterCharacters.propTypes = {
  handleFilter: PropTypes.func,
  filterText: PropTypes.string
};

export default FilterCharacters;
