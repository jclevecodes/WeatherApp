import React from 'react';
import './WeatherDataStyling.css';
import { API_KEY } from '../apidata/ApiKey';

const WeatherData = () => {
  return (
    <div className='weather-app'>
        <div>
            <div className='weather-location'>
                Tokyo
            </div>
            <div className='weather-degrees'>12.84°</div>

            <div className='weather-description'>
                Partly Cloudy
            </div>            
        </div>
        
        <div>
            <div className='weather-description-head'>
                <span className=''>⛅️</span>
            </div>
        </div>
        
    </div>
    
    
  )
}

export default WeatherData
