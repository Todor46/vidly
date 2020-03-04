import React from 'react';

const Select = ({
  name,
  valueName,
  label,
  error,
  options,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="form-control"
        onChange={onChange}
        value={value}
      >
        <option value=""></option>
        {options.map(item => (
          <option key={item[valueName]} value={item[valueName]}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
