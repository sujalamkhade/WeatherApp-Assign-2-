import Navbar from './Navbar'
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import { useState } from 'react';
import './Weather.css';

const backgroundImages = {
  Clear: "linear-gradient(55deg, #fc7826, #f0ff47)",
  Smoke: "linear-gradient(55deg, #fc7826, #f0ff47)",
  Clouds: "linear-gradient(55deg,rgb(112, 231, 231),rgb(12, 169, 190))",
  Rain: "linear-gradient(55deg, #2449ff, #47fff0)",
  Snow: "linear-gradient(55deg,rgb(67, 211, 240), #ffffff)",
  Haze: "linear-gradient(45deg, #57d6d4, #71eeec)",
  Mist: "linear-gradient(45deg, #57d6d4, #71eeec)",
};
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [background, setBackground] = useState(backgroundImages.Clear); // Default background

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": clear_icon,
    "03n": clear_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async () => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.cod !== 200) {
        alert("City not found. Please enter a valid city name.");
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      const weatherBackground = backgroundImages[data.weather[0].main] || "linear-gradient(55deg, #d0d0d0, #ffffff)";

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        visibility: data.visibility / 1000, // Convert meters to kilometers
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
        icon: icon,
      });
      setBackground(weatherBackground); // Update background
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="app" style={{ backgroundImage: background }}>
      <Navbar />
      <div className="weather">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <img
            src={search_icon}
            alt="Search Icon"
            onClick={search} // Call the search function on click
            style={{ cursor: "pointer" }}
          />
        </div>
        {weatherData ? (
          <>
            <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="Humidity Icon" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="Wind Icon" />
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="loading">Enter City!!!</p>
        )}
      </div>
    </div>
    
  );
};

export default Weather;

