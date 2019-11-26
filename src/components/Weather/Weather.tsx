import {useEffect, useState} from "react";

export interface Weather {
    name: string;
    weather: Array<{
        description: string,
        icon: string
    }>
    main: {
        temp : number,
        humidity: number
    };
    wind: {
        speed: number
    };
}

export const useWeather = (location: string): [boolean, Weather | null, string | null] => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const suffix = "&appid=ee95f4ab36df2399c08048bb4b91dff0&lang=nl&units=metric";

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<Weather | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () : Promise<Weather> => {
            const res = await fetch(baseUrl + location + suffix);
            return await res.json();
        };

        fetchData()
            .then(setResult)
            .then(() => setIsLoading(false))
            .catch(setError);
    }, [location]);

    return [isLoading, result, error];
};