import React from "react";
import Cta from "./Cta";
import "./header.css";
import image1 from "../../assests/image1.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yogender Singh</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={image1} alt="images" className="image" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
