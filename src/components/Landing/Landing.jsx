import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/NavBar/Nav";
import Footer from "../Footer/Footer";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./Landing.css";

function Landing() {
  return (
    <div className="generalContainer">
      <Nav />
      <hr />
      <div className="initialContainer">
        <h1 className="h1">¿cual es la temperatura ahora?</h1>
        <ArrowDownwardIcon className="arrow" />
        <div className="btnContainer">
          <Link to={"/Home"} className="link">
            <button className="btn">¿Vamos a Averiguarlo?</button>
          </Link>
        </div>
      </div>
      <div className="aboutContainer">
        <h2 className="h2">
          Aplicacion creada con componentes de React usando la API del clima de:
          <a className="a" href="https://openweathermap.org">
            "OpenWeather.org"
          </a>
        </h2>
      </div>
      <div className="FooterContainer">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
