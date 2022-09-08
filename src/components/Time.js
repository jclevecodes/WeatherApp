import React, { useEffect, useState } from 'react';
import './TimeStyling.css';
import { AiFillHome } from 'react-icons/ai';
import { ImLocation, ImTicket } from 'react-icons/im';


const Time = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])

  function tick() {
    setDate(new Date());
  }

  return (
    <div className='wrapper'>
      <div className='time-wrapper'>
        <div className='clock'>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>

        <div className='date'>{date.toLocaleDateString(undefined, {weekday: 'long',})} | {date.toLocaleDateString(undefined, {month: 'long', day: 'numeric'})}</div>
      </div>
      <div className='button-wrapper'>
        <button className='home'> <AiFillHome />{"\u00a0"}Home</button>
        <button className='location'> <ImLocation />{"\u00a0"}Location</button>
      </div>
    </div>
    
    
  )
}

export default Time