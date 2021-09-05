import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [loaded, setLoaded ] = useState (false);
  const [weatherInfo, setWeatherInfo] =useState ({});
  function handleResponse(response) {
    console.log (response.data);
    setWeatherInfo ({
      temperature:response.data.main.temp ,
      wind: response.data.wind.speed ,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description : response.data.weather[0].description,
      icon: "https://cdn3.iconfinder.com/data/icons/lucid-weather/24/sun_hot_brightness_sunny_star-512.png",
      high: response.data.main.temp_max,
      low: response.data.main.temp_min
  });
  setLoaded(true);
}

if (loaded) {
return (
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Input a city"
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-info " />
        </div>
      </div>
    </form>

    <h1> {weatherInfo.city}</h1>
    <ul>
      <li> Monday 10:00 AM</li>
      <li className="text-capitalize">{weatherInfo.description}</li>
    </ul>

    <div className="row">
      <div className="col-6">
        <img src={weatherInfo.icon} alt={weatherInfo.description} />{" "}
        <span className="temperature">
          {Math.round(weatherInfo.temperature)}
        </span>{" "}
        <span className="celsius">°C</span> <span className="division">|</span>{" "}
        <span className="fahrenheit">°F</span>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {weatherInfo.humidity}%</li>
          <li>Wind: {Math.round(weatherInfo.wind)} km/h</li>
          <li>
            {" "}
            H: {Math.round(weatherInfo.high)}°C | L:{" "}
            {Math.round(weatherInfo.low)}°C
          </li>
        </ul>
      </div>
    </div>
  </div>
);}
  else {
    const apiKey = "dec74aa3cca603388c8175de57e5d65a"
  let city="tokyo";
; let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);  
return "hi!"
  
}}
