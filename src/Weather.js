import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherInfo({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
    });
    setLoaded(true);
  }
  function search() {
    const apiKey = "dec74aa3cca603388c8175de57e5d65a";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Input a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-info  w-100"/>
            </div>
          </div>
        </form>
        <WeatherInformation data={weatherInfo} />
      </div>
    );
  } else {
    search ();
    return "Loading....";
  }
}
