import './App.css';
import Weather from "./weather";
import { useEffect, useState } from "react";

// const cityName = prompt("City name?")
const App = () => {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("London");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e6cd299753e31c73755d6e6c16f8e54`;
    const fetchData = async () => {
      console.log('fetching');
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setWeather(data)
        setCityName(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData();
  }, [])

  if (weather !== null || weather === {}) {
    return (
    <Weather weather={weather} />
  )
  }
}

export default App;
