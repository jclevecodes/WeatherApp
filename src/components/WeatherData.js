import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherDataStyling.css';
import { API_KEY } from '../Data/ApiKey';
// import { WeatherDataFetch, location, degress, description, icon } from '../Data/DataFetch'

const WeatherData = () => {
    const [degress, setDegrees] = useState(null)
    const [location, setLocation] = useState("")
    const [userLocation, setuserLocation] = useState("")
    const [description, setDescription] = useState("")
    const [icon, setIcon] = useState("")
    const [humidity, setHumidity] = useState(null)
    const [wind, setWind] = useState(null)
    const [country, setCountry] = useState("")

    const weatherDataFetch = async () => {
        // e.preventDefault()

        const results = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${API_KEY}`)
        const weatherData = await results.weatherData

        setDegrees(weatherData.main.temp)
        setLocation(weatherData.name)
        setDescription(weatherData.weather[0].description)
        setIcon(weatherData.weather[0].icon)
        setHumidity(weatherData.main.humidity)
        setWind(weatherData.wind.speed)
        setCountry(weatherData.sys.country)

        console.log(weatherData)
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
            <div className='weather-degrees'>{degress} °F</div>
            <div className='weather-description'>
                {description}
            </div>            
        </div>
        
        <div>
            <div className='weather-description-head'>
                <span className=''>{icon}</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherData
