import React, { useState } from "react";
import WeatherToday from "./WeatherToday";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    let unit = "imperial";
    let apiKey = "125f64a9971676c48141e4f1453acef7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Weather-Wrapper">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-secondary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherToday data={weatherData} />
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
    searchCity();
    return "Loading...";
  }
}
