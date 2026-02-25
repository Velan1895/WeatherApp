import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Enter City (e.g., Delhi)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;