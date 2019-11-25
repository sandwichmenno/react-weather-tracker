import React from 'react';

import {useWeather, Weather} from '../Weather/Weather';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 600px;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    margin: 50px auto;
    padding: 20px 0;
    box-sizing: border-box;
    padding: 20px;
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

const WeatherInfo: React.FC = () => {
    const [isLoading, result, error] = useWeather("Kortenhoef");

    if (result) {
        const {city, description, icon, humidity, temp, wind} = result;
    }

    if (isLoading) {
        console.log("Data is loading...");
    }

    if(error) {
        console.log("Error loading data: " + error);
    }

    return (
        <Wrapper>
            <City>{city}</City>
            <Description>{description}</Description>
            <Temperature>{temp}°C <img width='150' src={icon} /></Temperature>
            <Details>{wind} km/h wind {humidity}% luchtvochtigheid</Details>
        </Wrapper>
    );
}

export default WeatherInfo;