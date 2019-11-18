import React from 'react';

import {Weather} from '../Weather/Weather';

const WeatherInfo: React.FC<{ weather: Weather }> = ({ weather }) => {

    const {city, description, icon, humidity, temp, wind} = weather;

    return (
        <div>
            <h2>{city}</h2>
            <h3>{description}</h3>
            <h2>{temp}°C <img src={icon} /></h2>
            <h3>{wind} km/h wind</h3>
            <h3>{humidity}% luchtvochtigheid</h3>
        </div>
    );
}

export default WeatherInfo;