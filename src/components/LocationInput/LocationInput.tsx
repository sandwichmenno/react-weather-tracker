import React, {useState} from 'react';
import styled from "styled-components";
import {Weather} from "../Weather/Weather";

const Input = styled.input`
    
`;

interface LocationInputProps {
    onUpdateLocation: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = (onUpdateLocation: LocationInputProps) => {
    const [location, setLocation] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation( e.target.value );
    };

    return (
        <div>
            <Input type="text" placeholder="Voer een locatie in"
                   onChange={handleChange} />
            <button onClick={() => onUpdateLocation(location)}>Opvragen</button>
        </div>
    );
}

export default LocationInput;