import React, {useState} from 'react';
import styled from "styled-components";
import {Weather} from "../Weather/Weather";

const Wrapper = styled.div`
    text-align: center;
`;

const Input = styled.input`
    background-color: transparent;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #fff;
    border-radius: 0;
    outline: none;
    display: block;
    padding: 15px 10px;
    width: 20%;
    margin: 0 auto;
    color: white;
    
    background-image: url('http://pixsector.com/cache/e7836840/av6584c34aabb39f00a10.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
`;

interface LocationInputProps {
    onUpdateLocation: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onUpdateLocation }) => {
    const [location, setLocation] = useState<string>('Utrecht');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation( e.target.value );
    };

    return (
        <Wrapper>
            <Input type="text" placeholder="Utrecht"
                   value={location}
                   onChange={handleChange}
                   onKeyPress={event => {
                       if (event.key === 'Enter') {
                           onUpdateLocation(location)
                       }
                   }}/>
        </Wrapper>
    );
}

export default LocationInput;