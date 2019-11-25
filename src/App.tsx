import React, {useEffect, useState} from 'react';

import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import styled, {createGlobalStyle} from "styled-components";
//import LocationInput from "./components/LocationInput/LocationInput";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;

const App: React.FC = () => {
    return (
        <div className="App">
            <GlobalStyles />
            <WeatherInfo/>
        </div>
    );
}

export default App;
