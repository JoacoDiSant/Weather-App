import React, { useState } from "react";
import axios from 'axios'
import "./Home.css";
import Nav from "../Nav/NavBar/Nav";
import Cards from "../Cards/Cards";
import Detail from "../Detail/Detail";
import SearchBar from "../Nav/SearchBar/SearchBar";
import Footer from "../Footer/Footer";

function Home() {
  const [cities, setCities] = useState([]);
  const [muestraDetalle, setMuestraDetalle] = useState(false);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  let apiKey = "f9113edd4d5c19caba9923a536e8e53e";

  function onSearch(ciudad) {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((recurso) => {
        let data = recurso.data
        if (data !== undefined) {
          const ciudad = {
            min: Math.round(data.temp_min),
            max: Math.round(data.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.temp,
            name: data.name,
            city: data.sys.country,
            weather: data.weather[0].data,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          const existe = cities.filter((city) => city.id === ciudad.id);
          if (existe.length !== 0) {
            alert("La ciudad ya existe");
          } else if (cities.length > 4) {
            let newCities = cities.slice(1);
            newCities.push(ciudad);
            setCities(newCities);
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Detail no encontrada");
        }
      });
  }

  function getDetalle(cityId) {
    setMuestraDetalle(cityId);
  }

  function resetDetalle() {
    setMuestraDetalle(false);
  }

  return (
    <div className="GeneralContainer">
      <div className="header">
        <div className="navBar">
          <Nav onSearch={onSearch} />
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="InfoContainer">
          {muestraDetalle ? (
            <Detail ciudadId={muestraDetalle} resetDetalle={resetDetalle} />
          ) : (
            <div className="container_cards">
              <Cards
                cities={cities}
                onClose={onClose}
                getDetalle={getDetalle}
                resetDetalle={resetDetalle}
              />
            </div>
          )}
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
