import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherDataStyling.css';
import { API_KEY } from '../Data/ApiKey';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
// import { WeatherDataFetch, location, degress, description, icon } from '../Data/DataFetch'

const WeatherData = () => {
    const [degrees, setDegrees] = useState(null)
    const [location, setLocation] = useState("")
    const [userLocation, setuserLocation] = useState("")
    const [description, setDescription] = useState("")
    const [icon, setIcon] = useState("")
    const [humidity, setHumidity] = useState(null)
    const [wind, setWind] = useState(null)
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    
    
    const weatherDataFetch = async () => {
        // e.preventDefault()

        const results = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${API_KEY}`)
        const data = await results.data

        setDegrees(data.main.temp)
        setLocation(data.name)
        setDescription(data.weather[0].description)
        setIcon(data.weather[0].icon)
        setHumidity(data.main.humidity)
        setWind(data.wind.speed)
        setCountry(data.sys.country)

        console.log(data)
    }

    useEffect(() => {
        weatherDataFetch()
    }, [])
  return (
    <div className='weather-app'>
        <div>
            <div className='weather-location'>
                {location}
            </div>
            <div className='weather-degrees'>{degrees} °F</div>
            <div className='weather-description'>
                {description}
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
