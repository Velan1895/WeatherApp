import React, { useState } from "react";
import { getTemperatureStats } from "../api/weatherService";

function TemperatureStats() {
  const [year, setYear] = useState("");
  const [stats, setStats] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await getTemperatureStats(year);
      setStats(response.data);
    } catch (error) {
      alert("No data found");
    }
  };

  return (
    <div>
      <h2>Temperature Statistics</h2>
      <input
        type="number"
        placeholder="Enter Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <table border="1">
        <thead>
          <tr>
            <th>Month</th>
            <th>High</th>
            <th>Median</th>
            <th>Minimum</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.high}</td>
              <td>{item.median}</td>
              <td>{item.minimum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TemperatureStats;