import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./About.css";

function About() {
  return (
    <div className="AboutContainer">
      <Link to="/" className="link">
        <div className="Home">Go Back</div>
      </Link>
      <div className="about">
        <h2>About</h2>
        <div className="aboutContent">
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
    </div>
  );
}

export default About;
