import React, {useEffect, useState} from "react";
import {useWeather, Weather} from "../Weather/Weather";
import LocationInput from "../LocationInput/LocationInput";

const WeatherMain: React.FC = () => {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [location, setLocation] = useState<string>("");

    const [isLoading, result, error] = useWeather(location);
    if(error) {
        console.log("Error loading data: " + error);
    }

    const updateLocationHandler = (location: string) => {
        setLocation(location);
    }

    return (
        <LocationInput onUpdateLocation={updateLocationHandler} />
    );
}

export default WeatherMain;