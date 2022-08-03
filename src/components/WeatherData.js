import React from 'react';
import './WeatherDataStyling.css';

const WeatherData = () => {
  return (
    <div className='weather-wrapper'>
        <div className='weather-location'>
            <h3>Weather in Tokyo</h3>
        </div>
        <div>
            <h1 className='weather-degrees'>12.84</h1>
        </div>

        <div className='weather-description'>
            <div className='weather-description-head'>
                <div>
                    <span className=''>⛅️</span>
                    <h3>Partly Cloudy</h3>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default WeatherData
