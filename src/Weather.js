import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DisplayDate from "./DisplayDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(),
      description: response.data.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let unit = "metric";
    let apiKey = "125f64a9971676c48141e4f1453acef7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Weather-Wrapper">
          {form}
          <div className="text-center">{weatherData.city}</div>
          <div className="text-center">
            <DisplayDate date={weatherData.date} />
          </div>
          <div className="text-center">{weatherData.description}</div>
          <div classname="container">
            <div className="row">
              <div className="col text-center">
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <div className="col text-center p-4">
                <div>{Math.round(weatherData.temperature)}°C</div>
              </div>
              <div className="col p-4">
                <div>Feels like: {Math.round(weatherData.feels)}°C</div>
                <div>Humidity: {weatherData.humidity}%</div>
                <div>Wind: {weatherData.wind}km/h</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Signature">
          <a
            href="https://github.com/annetheanne/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by{" "}
          <a href="https://annehuynh.com" target="_blank" rel="noreferrer">
            Anne Huynh
          </a>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
