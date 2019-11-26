import React, {useEffect, useState} from "react";
import {useWeather, Weather} from "../Weather/Weather";
import LocationInput from "../LocationInput/LocationInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 50px;
`;

const WeatherMain: React.FC = () => {
    const [location, setLocation] = useState<string>("utrecht");

    const [isLoading, result, error] = useWeather(location);
    if(error) {
        console.log("Error loading data: " + error);
    }

    if(result) {
        const {name, weather: [{ description, icon }], main: { temp, humidity }, wind: {speed}} = result;

        const weather = {
            name: name,
            description: description,
            icon: icon,
            temp: Math.round(temp),
            humidity: humidity,
            speed: speed
        }

        return (
            <Wrapper>
                <LocationInput onUpdateLocation={setLocation} />

                {result &&
                <WeatherInfo weather={weather}/>}
            </Wrapper>
        );
    }
    return null;
}

export default WeatherMain;