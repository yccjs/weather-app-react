import React from "react";
import DateFormat from "./DateFormat.js";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInformation (props){
   return (<div>
   <h1> {props.data.city}</h1>
    <ul>
      <li>
        {" "}
        <DateFormat date={props.data.date} />
      </li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>

    <div className="row">
      <div className="col-6">
<WeatherIcon code= {props.data.icon} alt={props.data.description}/>
      
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>{" "}
        <span className="celsius">°C</span> <span className="division">|</span>{" "}
        <span className="fahrenheit">°F</span>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
          <li>
            {" "}
            H: {Math.round(props.data.high)}°C | L:{" "}
            {Math.round(props.data.low)}°C
          </li>
        </ul>
      </div>
    </div>

   </div>)
}