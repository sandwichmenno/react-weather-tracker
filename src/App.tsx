import React, {useEffect, useState} from 'react';
import './App.css'

import {Weather} from './components/Weather/Weather';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

const App: React.FC = () => {
    const [city, setCity] = useState('Kortenhoef');
    const [weather, setWeather] = useState<Weather | null>(null);

    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const suffix = "&appid=ee95f4ab36df2399c08048bb4b91dff0&lang=nl&units=metric";

    useEffect(() => {
        getWeather(city);
    }, []);

    async function getWeather(location: string) {
        const response = await fetch(baseUrl + location + suffix);
        if (response.status === 200){
            const json = await response.json();
            const weatherTemp: Weather = json;
            weatherTemp.temp = Math.round(json.main.temp);
            weatherTemp.humidity = json.main.humidity;
            weatherTemp.description = json.weather[0].description;
            weatherTemp.icon = "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
            weatherTemp.city = json.name;
            weatherTemp.wind = json.wind.speed;

            setWeather(weatherTemp);
        } else {
            setWeather(null);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity( e.target.value );
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        getWeather(city);

        console.log(weather);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Voer een locatie in"
                       onChange={handleChange} />
                <button type="submit">Opvragen</button>
            </form>

            {weather &&
                <WeatherInfo weather={weather} />
            }
        </div>
    );
}

export default App;
