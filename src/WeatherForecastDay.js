import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecastDay-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} height={55} />
      <div className="WeatherForecastDay-temp">
        <span className="WeatherForecastDay-temp-max">
          {maxTemperature()}F |
        </span>
        <span className="WeatherForecastDay-temp-min">
          {" "}
          {minTemperature()}F
        </span>
      </div>
    </div>
  );
}
