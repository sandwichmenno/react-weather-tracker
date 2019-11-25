import {useEffect, useState} from "react";

export interface Weather {
    city: string;
    description: string;
    icon: string;
    temp: number;
    humidity: number;
    wind: number;
}

export const useWeather = (location: string) => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const suffix = "&appid=ee95f4ab36df2399c08048bb4b91dff0&lang=nl&units=metric";

    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [result, setResult] = useState<Weather | null>(null);
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(baseUrl + location + suffix);
                const json = await res.json();
                setResult(json);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [location]);

    return [isLoading, result, error];
};