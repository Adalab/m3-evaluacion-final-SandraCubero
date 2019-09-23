import React from 'react';

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

export default FilterCharacters;
