import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  );
}

export default App;
