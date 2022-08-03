import './App.css';
import videoBg from "./videos/sunnyvid.mp4";
import Time from './components/Time';
import Input from './components/Input';
import WeatherData from './components/WeatherData';

function App() {
  return (
    <div className="App">
      <video src={videoBg} autoPlay loop muted />
      <div className='weather-wrapper'>
        <div className='time-box'>
          <Time/>
        </div>
        <div className='weather-box'>
          <Input />
          <WeatherData />
        </div>
      </div>
    </div>
  );
}

export default App;
