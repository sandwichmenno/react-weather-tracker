import React, {useState} from 'react';
import styled from "styled-components";
import {useWeather} from "../Weather/Weather";

const Input = styled.input`
    
`;

const LocationInput: React.FC = () => {
    const [location, setLocation] = useState('Kortenhoef');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation( e.target.value );
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Voer een locatie in"
                   onChange={handleChange} />
            <button type="submit">Opvragen</button>
        </form>
    );
}

export default LocationInput;