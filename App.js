import './App.css';
import Search from './Components/Search';
import Weather from './Components/Weather';

function App() {
  const [weather, setWeather] = ([])  
  const searchWeather = async (lat, lon) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ea90fb5eb3d27198772eb3eceed38389`)
    const datas = await res.json()
    console.log(datas);
    console.log(lat, lon)
  }
  
  return (
    <div className="App">
      <Search 
      // onLocation={searchLocation}
      onWeather={searchWeather}
      />
      <Weather />
    </div>
  );
}

export default App;
