import React from "react";

export default function WeatherIcon(props) {
  if (props.code === "01d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg"
        alt="Clear Day"
        height={props.height}
      />
    );
  } else if (props.code === "01n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg"
        alt="Clear Night"
        height={props.height}
      />
    );
  } else if (props.code === "02d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day.svg"
        alt="Partly Cloudy Day"
        height={props.height}
      />
    );
  } else if (props.code === "02n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-night.svg"
        alt="Partly Cloudy Night"
        height={props.height}
      />
    );
  } else if (props.code === "03d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/cloudy.svg"
        alt="Cloudy Day"
        height={props.height}
      />
    );
  } else if (props.code === "03n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/cloudy.svg"
        alt="Cloudy Night"
        height={props.height}
      />
    );
  } else if (props.code === "04d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/overcast-day.svg"
        alt="Overcast Day"
        height={props.height}
      />
    );
  } else if (props.code === "04n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/overcast-night.svg"
        alt="Overcast Night"
        height={props.height}
      />
    );
  } else if (props.code === "09d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/drizzle.svg"
        alt="Drizzle Day"
        height={props.height}
      />
    );
  } else if (props.code === "09n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/drizzle.svg"
        alt="Drizzle Night"
        height={props.height}
      />
    );
  } else if (props.code === "10d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/rain.svg"
        alt="Rain Day"
        height={props.height}
      />
    );
  } else if (props.code === "10n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/rain.svg"
        alt="Rain Night"
        height={props.height}
      />
    );
  } else if (props.code === "11d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/thunderstorms-day.svg"
        alt="Thunderstorms Day"
        height={props.height}
      />
    );
  } else if (props.code === "11n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/thunderstorms-night.svg"
        alt="Thunderstorms Night"
        height={props.height}
      />
    );
  } else if (props.code === "13d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/snow.svg"
        alt="Snow Day"
        height={props.height}
      />
    );
  } else if (props.code === "13n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/snow.svg"
        alt="Snow Night"
        height={props.height}
      />
    );
  } else if (props.code === "50d") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/mist.svg"
        alt="Mist Day"
        height={props.height}
      />
    );
  } else if (props.code === "50n") {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/mist.svg"
        alt="Mist Night"
        height={props.height}
      />
    );
  } else {
    return (
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/fog.svg"
        alt="Fog"
        height={props.height}
      />
    );
  }
}
