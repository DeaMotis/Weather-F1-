import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = ({ coordinates }) => (
    <YMaps>
        <Map defaultState={{ center: coordinates, zoom: 10 }} width="100%" height="400px">
            <Placemark geometry={coordinates} />
        </Map>
    </YMaps>
);

export default YandexMap;