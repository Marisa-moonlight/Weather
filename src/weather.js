import React from 'react';

const Weather = ({weather}) => {
   return(
    <div className='Weatherbox'>

    <h1 className='city'>Place: {weather.name}</h1>
    <h1 className='coord'>Coordinates: {weather.coord.lon} {weather.coord.lat}</h1>
    <br/>
    <br/>
    <br/>
    <br/>
    <h3 className='temp'>Temprature: {weather.main.temp}</h3>
    <h3 className='press'>pressure: {weather.main.pressure}</h3>
    <br/>
    <br/>
    <br/>
    <br/>
    <h3 className='deg'>degrees: {weather.wind.deg}</h3>
    <h3 className='speed'>wind speed: {weather.wind.speed}</h3>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
   )
}

export default Weather;