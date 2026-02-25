
import React from "react";

const Forecast = ({ data }) => {
  if (!data) return null;

  const daily = data.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {daily.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold">
            {new Date(item.dt_txt).toLocaleDateString()}
          </p>
          <p>{item.main.temp}°C</p>
          <p className="capitalize">{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;