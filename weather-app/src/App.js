
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import CitySelector from './components/CitySelector';

const App = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [apiKey] = useState('bfefdb8a01b37af196eb9862aec3cbb9');

    useEffect(() => {
    // Получаем список городов (можно использовать статический массив)
        const cityList = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Екатеринбург'];
        setCities(cityList);
    }, []);

    const fetchWeatherData = async (city) => {
        try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric');
        setWeatherData(response.data);
        } catch (error) {
        console.error('Error fetching weather data:', error);
        }
    };

    const handleCityChange = (city) => {
        setSelectedCity(city);
        fetchWeatherData(city);
    };

    return (
        <div className="App">
        <CitySelector cities={cities} onCityChange={handleCityChange} />
        {weatherData && <Weather data={weatherData} />}
        </div>
    );
    };

export default App;
