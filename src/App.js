import './App.css';
import videoBg from "./videos/sunnyvid.mp4";
import Time from './components/Time';
import Input from './components/Input';
import WeatherData from './components/WeatherData';
// import { WeatherDataFetch } from './WeatherData';

// const [userLocation, setuserLocation] = useState("")

function App() {
  return (
    <div className="App">
      <video src={videoBg} autoPlay loop muted />
      <div className='weather-wrapper'>
        <div className='time-box'>
          <Time/>
        </div>
        <div className='weather-box'>
          <Input
            // inputLocation={(e) => setuserLocation(e.target.value)} 
            // formSubmit={WeatherDataFetch}
          />
          <WeatherData />
        </div>
      </div>
    </div>
  );
}

export default App;
