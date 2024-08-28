import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import GeolocationComponent from './components/GeolocationComponent';
import WeatherComponent from './components/WeatherComponent';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [apiKey] = useState('bfefdb8a01b37af196eb9862aec3cbb9');

    // Получаем геолокацию пользователя
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
            });
        }
    }, []);

    // Функция для получения данных о погоде
    const fetchWeatherData = async (city) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // Обработчик изменения выбранного города, который передадим в WeatherComponent
    const handleCityChange = (city) => {
        fetchWeatherData(city);
    };

    return (
        <div className="App">
            <WeatherComponent onCityChange={handleCityChange} />
            <GeolocationComponent />
            {weatherData && <Weather data={weatherData} />}
        </div>
    );
};

export default App;