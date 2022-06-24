import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    const temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    const temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="weatherforecast-temperature">
        <span className="weatherforecast-max">{maxTemp()}°</span> {""}
        <span className="weatherforecast-min">{minTemp()}°</span>
      </div>{" "}
    </div>
  );
}
