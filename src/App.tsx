import React, {useEffect, useState} from 'react';

import styled, {createGlobalStyle} from "styled-components";

import WeatherMain from "./components/WeatherMain/WeatherMain";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    background: #7986CB;
  }
`;

const App: React.FC = () => {
    return (
        <div className="App">
            <GlobalStyles />

            <WeatherMain/>
        </div>
    );
}

export default App;
