import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="Weather-Wrapper">
        <h1>Weather App</h1>
        <WeatherSearch />
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
}

export default App;
