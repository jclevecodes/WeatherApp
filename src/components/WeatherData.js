import React, { useEffect } from 'react';
import axios from 'axios';
import './WeatherDataStyling.css';
import { API_KEY } from '../Data/ApiKey';


const [degress, setDegrees] = useState(null)
const [location, setLocation] = useState("")
const [description, setDescription] = useState("")
const [icon, setIcon] = useState("")
const [humidity, setHumidity] = useState(null)
const [wind, setWind] = useState(null)
const [country, setCountry] = useState("")

const WeatherDataFetch = async () => {
    const results = await axios.get("")
    const weatherData = await results.weatherData

    console.log(weatherData)
}

useEffect(() => {
    WeatherDataFetch()
})

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
