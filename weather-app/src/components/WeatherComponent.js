javascript
import React, { useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const apiKey = 'bfefdb8a01b37af196eb9862aec3cbb9'; //  API ключ OpenWeatherMap.

    const fetchWeather = async () => {
        if (!city) {
            setError('Пожалуйста, введите название города.');
            return;
        }

        setError('');
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeather(response.data);
        } catch (err) {
            setError('Ошибка получения данных о погоде. Проверьте правильность введенного города.');
            setWeather(null);
        }
    };

    return (
        <div>
            <h1>Погода</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Введите название города"
            />
            <button onClick={fetchWeather}>Получить погоду</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weather && (
                <div>
                    <h2>Погода в {weather.name}</h2>
                    <p>Температура: {weather.main.temp} °C</p>
                    <p>Влажность: {weather.main.humidity}%</p>
                    <p>Состояние: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;