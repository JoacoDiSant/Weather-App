import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className="SearchContainer">
      <form
        className="Search"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          className="Input"
          type="text"
          placeholder="Agregar ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className="AddBtn" type="submit" value="GO" />
      </form>
    </div>
  );
}
