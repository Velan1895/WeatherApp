import React from "react";
import WeatherByDate from "./components/WeatherByDate";
import WeatherByMonth from "./components/WeatherByMonth";
import TemperatureStats from "./components/TemperatureStats";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Delhi Weather App</h1>
      <WeatherByDate />
      <hr />
      <WeatherByMonth />
      <hr />
      <TemperatureStats />
    </div>
  );
}

export default App;