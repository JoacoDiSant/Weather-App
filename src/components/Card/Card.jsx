import React from "react";
import "./Card.css";

export default function Card({
  temp,
  city,
  name,
  img,
  id,
  getDetalle,
  resetDetalle,
}) {
  const handleOnClick = () => {
    resetDetalle();
    getDetalle(id);
  };

  return (
    <div className="CardContainer" onClick={handleOnClick}>
      <div className="name">
        <p>{`${name}, ${city} - Temp: ${temp}°`}</p>
      </div>
      <div className="body">
        <img
          className="iconoClima"
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          width="50"
          height="50"
          alt=""
        />
      </div>
    </div>
  );
}
