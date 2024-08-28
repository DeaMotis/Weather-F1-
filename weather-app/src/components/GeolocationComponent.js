import React, { useState, useEffect } from 'react';
import coverImage from '../media/cover.jpg';

const GeolocationComponent = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Проверка, поддерживается ли Geolocation API
        if (!navigator.geolocation) {
            setError('Geolocation не поддерживается в вашем браузере.');
            return;
        }

        // Функция для получения координат
        const successCallback = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            setError(null);
        };

        // Функция для обработки ошибок
        const errorCallback = (error) => {
            setError(`Ошибка получения местоположения: ${error.message}`);
        };

        // Запрос местоположения
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);

    return (
        <div>
            <h1>Геолокация</h1>
            {error && <p>{error}</p>}
            {location.latitude && location.longitude ? (
                <p>Широта: {location.latitude}, Долгота: {location.longitude}</p>
            ) : (
                <p>Получение местоположения...</p>
            )}
        </div>
    );
};

export default GeolocationComponent;