import React, { useState } from "react";
import { getWeatherByMonth } from "../api/weatherService";

function WeatherByMonth() {
  const [month, setMonth] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await getWeatherByMonth(month);
      setData(response.data);
    } catch (error) {
      alert("No data found");
    }
  };

  return (
    <div>
      <h2>Weather By Month</h2>
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.date} - {item.temperature}°C - {item.condition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherByMonth;