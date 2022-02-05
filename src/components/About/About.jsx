import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./About.css";

function About() {
  return (
    <div className="AboutContainer">
      <Link to="/" className="link">
        <div className="Home">Home</div>
      </Link>
      <h2 className="Head">About</h2>
      <div className="about">
        <p>
          Mi nombre es Joaqin Di Santo Soy Programdor Web FullStack <br /> 
           y he creado esta SPA (Single Page Application)
          <br /> Esta consume datos de la API externa <br />
          OpenWeatherMap (
          <a className="aaa" href="https://openweathermap.org/api">
            https://openweathermap.org/api
          </a>
          ) <br />
          Aca Estan Mis Redes
          <Footer />
        </p>
      </div>
    </div>
  );
}

export default About;
