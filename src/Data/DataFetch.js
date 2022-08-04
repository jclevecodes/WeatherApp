// import React, { useEffect, useState } from "react"
// import axios from 'axios';
// import { API_KEY } from "./ApiKey"

// export const WeatherDataFetch = async () => {

//     const [degress, setDegrees] = useState(null)
//     const [location, setLocation] = useState("")
//     const [userLocation, setuserLocation] = useState("")
//     const [description, setDescription] = useState("")
//     const [icon, setIcon] = useState("")
//     const [humidity, setHumidity] = useState(null)
//     const [wind, setWind] = useState(null)
//     const [country, setCountry] = useState("")

//     const results = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${API_KEY}`)
//     const weatherData = await results.weatherData

//     setDegrees(weatherData.main.temp)
//     setLocation(weatherData.name)
//     setDescription(weatherData.weather[0].description)
//     setIcon(weatherData.weather[0].icon)
//     setHumidity(weatherData.main.humidity)
//     setWind(weatherData.wind.speed)
//     setCountry(weatherData.sys.country)

//     console.log(weatherData)
// }

// export default WeatherDataFetch