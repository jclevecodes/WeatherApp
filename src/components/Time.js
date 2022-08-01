import React from 'react';
import './TimeStyling.css';
import { AiFillHome } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';


const Time = () => {
  return (
    <div className='wrapper'>
      <div className='time-wrapper'>
        <div className='clock'>03:40</div>
        <div className='date'>Monday | Aug 1</div>
      </div>
      <div className='button-wrapper'>
        <button className='home'> <AiFillHome />{"\u00a0"}Home</button>
        <button className='location'> <ImLocation />{"\u00a0"}Location</button>
      </div>
    </div>
    
    
  )
}

export default Time