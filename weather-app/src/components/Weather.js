
import React from 'react';

const Weather = ({ data }) => {
  const { main, weather, name } = data;
  return (
    <div>
      <h2>Погода в {name}</h2>
      <p>Температура: {main.temp} °C</p>
      <p>Описание: {weather[0].description}</p>
    </div>
  );
};

export default Weather;