import React from 'react';
import './TimeStyling.css';

const Time = () => {
  return (
    <div className='wrapper'>
      <div className='time-wrapper'>
        <div className='clock'>09:00</div>
        <div className='date'>Sunday | Jul 31</div>
      </div>
      <div className='button-wrapper'>
        <button className='home'>Home</button>
        <button className='location'>Location</button>
      </div>
    </div>
    
    
  )
}

export default Time