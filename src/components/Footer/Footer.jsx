import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { LinkedIn, GitHub, Public, Info } from "@material-ui/icons";

function Footer() {
  return (
    <div className="FooterContainer">
      <a href="https://www.linkedin.com/in/joaquindisantodev/">
        <LinkedIn className="Linkedin" />
      </a>
      <a href="https://github.com/JoacoDiSant">
        <GitHub className="Github" />
      </a>
      <a href="https://portfolio-eight-smoky-25.vercel.app/">
        <Public className="Public" />
      </a>
      <Link to={"/about"} className="aa">
        <Info className="Info" />
      </Link>
    </div>
  );
}

export default Footer;
