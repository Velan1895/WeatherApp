import React from "react";

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
      <h2 className="text-xl font-bold mb-2">
        {data.name}, {data.sys.country}
      </h2>
      <p className="text-4xl font-semibold">{data.main.temp}°C</p>
      <p className="capitalize">{data.weather[0].description}</p>

      <div className="grid grid-cols-3 gap-4 mt-4 text-center">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Pressure</p>
          <p>{data.main.pressure} hPa</p>
        </div>
        <div>
          <p className="font-semibold">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;