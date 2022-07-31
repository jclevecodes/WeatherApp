import './App.css';
import videoBg from "./videos/sunnyvid.mp4";

function App() {
  return (
    <div className="App">
      <video src={videoBg} autoPlay loop muted />
      <div className='weather-wrapper'>
        <div className='time-box'></div>
        <div className='weather-box'></div>
      </div>
    </div>
  );
}

export default App;