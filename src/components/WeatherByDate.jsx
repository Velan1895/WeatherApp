import React, { useState } from "react";
import { getWeatherByDate } from "../api/weatherService";

function WeatherByDate() {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await getWeatherByDate(date);
      setData(response.data);
    } catch (error) {
      alert("No data found");
    }
  };

  return (
    <div>
      <h2>Weather By Date</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {data && (
        <div>
          <p>Condition: {data.condition}</p>
          <p>Temperature: {data.temperature}</p>
          <p>Humidity: {data.humidity}</p>
          <p>Pressure: {data.pressure}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherByDate;