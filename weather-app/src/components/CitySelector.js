import React from 'react';

const CitySelector = ({ cities, onCityChange }) => {
  return (
    <select onChange={e => onCityChange(e.target.value)}>
      <option value="">Выберите город</option>
      {cities.map(city => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  );
};

export default CitySelector;