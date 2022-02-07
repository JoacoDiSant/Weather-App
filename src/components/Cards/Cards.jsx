import React from "react";
import "./Cards.css";

import Card from "../Card/Card";

export default function Cards({ cities, onClose, getDetalle, resetDetalle }) {
 console.log(cities);
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          id={c.id}
          key={c.id}
          temp={c.temp}
          name={c.name}
          city={c.city}
          img={c.img}
          onClose={() => onClose(c.id)}
          getDetalle={getDetalle}
          resetDetalle={resetDetalle}
        />
      ))}
    </div>
  );
}
