import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import coverImage from '../media/cover.jpg';

function Forecast({ dailyWeather }) {
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    return (
        <div className="forecast">
            {dailyWeather.length === 0 && <div>Загрузка прогноза...</div>}
            {dailyWeather.map((day, index) => {
                if (!day || !day.weather || !day.temp) {
                    return null;  // Если данных нет, ничего не отображаем
                }
                const date = new Date(day.dt * 1000);
                return (
                    <div key={index} className="forecast-day">
                        <h3>{days[date.getDay()]}</h3>
                        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="" width="50" />
                        <div>{Math.round(day.temp.day)}°C</div>
                        <div>Ощущается как: {Math.round(day.feels_like.day)}°C</div>
                        <div>Ветер: {day.wind_speed} м/с</div>
                    </div>
                );
            })}
        </div>
    );
} // Закрывающая скобка для компонента Forecast

function Current(props) {
    const [dailyWeather, setDailyWeather] = useState([]);
    const [currentWeather, setCurrentWeather] = useState(null);
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const date = new Date();

    useEffect(() => {
        const fetchWeatherForecast = async () => {
            try {
                const responseCurrent = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                    params: {
                        q: props.city,
                        appid: 'bfefdb8a01b37af196eb9862aec3cbb9', // Лучше взять ключ из переменной окружения
                        units: 'metric'
                    }
                });

                const { lat, lon } = responseCurrent.data.coord;
                setCurrentWeather(responseCurrent.data);

                const responseForecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
                    params: {
                        lat,
                        lon,
                        exclude: 'current,minutely,hourly,alerts',
                        appid: 'bfefdb8a01b37af196eb9862aec3cbb9', // Лучше взять ключ из переменной окружения
                        units: 'metric'
                    }
                });

                console.log(responseForecast.data); // Проверяем, какие данные возвращаются
                setDailyWeather(responseForecast.data.daily); // Сохраняем прогноз погоды на 7 дней

            } catch (error) {
                console.error("Error fetching weather data: ", error);
            }
        };

        fetchWeatherForecast();
    }, [props.city]);

    return (
        <div className="current">
            {currentWeather && (
                <div className="weather-left">
                    <div className="weather-city">{currentWeather.name}</div>
                    <h2 className="date"> {date.toLocaleDateString()}, {days[date.getDay()]} </h2>
                    <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`} alt="" width="100" />
                    <div className="desc-main">{currentWeather.weather[0].description}</div>
                    <div className="feels-like">Ощущается как: {Math.round(currentWeather.main.feels_like)}°</div>
                </div>
            )}

            {/* Добавляем Forecast компонент */}
            {dailyWeather.length > 0 && <Forecast dailyWeather={dailyWeather} />}
        </div>
    );
}

export default Current;