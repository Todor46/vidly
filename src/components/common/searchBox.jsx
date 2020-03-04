import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className="form-control mb-3"
      type="text"
      placeholder="Search..."
      onChange={e => onChange(e.currentTarget.value)}
      value={value}
    />
  );
};

export default SearchBox;
