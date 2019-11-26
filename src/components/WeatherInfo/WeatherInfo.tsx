import React, {useState} from 'react';

import {useWeather, Weather} from '../Weather/Weather';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 600px;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    margin: 20px auto;
    padding: 20px 0;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
`;

const City = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: 0em;
`;

const Description = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: rgba(0, 0, 0, 0.54);
`;

const Temperature = styled.div`
    font-size: 3.75rem;
    line-height: 1;
    letter-spacing: -0.00833em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
`;

const Details = styled.div`
    font-size: 0.875rem;
    line-height: 1.57;
    letter-spacing: 0.00714em;
    color: rgba(0, 0, 0, 0.54);
`;

interface WeatherObject {
    weather: {
        name: string,
        description: string,
        icon: string,
        temp: number,
        humidity: number,
        speed: number
    }
}

const WeatherInfo: React.FC<WeatherObject> = (weather) => {
    const {name, description, icon, temp, humidity, speed} = weather.weather;

    return (
        <Wrapper>
            <City>{name}</City>
            <Description>{description}</Description>
            <Temperature>{temp}°C <img width='150' src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} /></Temperature>
            <Details>{speed} km/h wind {humidity}% humidity</Details>
        </Wrapper>
    );
}

export default WeatherInfo;