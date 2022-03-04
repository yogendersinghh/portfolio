import React from "react";
import CV from "../../assests/yogenderCV.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
