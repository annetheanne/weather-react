import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherToday.css";

export default function WeatherToday(props) {
  return (
    <div className="WeatherToday">
      <div className="text-center mt-4">{props.data.city}</div>
      <div className="text-center">
        <DisplayDate date={props.data.date} />
      </div>
      <div className="text-center">{props.data.description}</div>
      <div classname="container">
        <div className="row text-center">
          <div className="col">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              height={110}
            />
          </div>
          <div className="col mt-4">
            <div>{Math.round(props.data.temperature)}°F</div>
          </div>
          <div className="col mt-4">
            <div>Feels like: {Math.round(props.data.feels)}°F</div>
            <div>Humidity: {props.data.humidity}%</div>
            <div>Wind: {props.data.wind}km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
