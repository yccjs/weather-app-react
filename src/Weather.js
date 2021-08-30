import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
<form>
    <div className="row">
        <div className="col-9">
<input type="search" placeholder="Input a city" className="form-control"/>
</div>
<div className="col-3">
<input type="submit" value="Search" className="btn btn-info"/>

       </div>
    </div>
</form>

      <h1> Tokyo</h1>
      <ul>
        <li> Monday 10:00 AM</li>
        <li>Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://cdn3.iconfinder.com/data/icons/lucid-weather/24/sun_hot_brightness_sunny_star-512.png"
            alt="sunny"
            width="100px"
          />{" "}
          32°
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitatiom: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 16 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
