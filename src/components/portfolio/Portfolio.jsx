import React from "react";
import "./portfolio.css";
import image1 from "../../assests/portfolio1.webp";
import image2 from "../../assests/portfolio2.webp";
import image3 from "../../assests/portfolio3.webp";
import image4 from "../../assests/portfolio4.webp";
import image5 from "../../assests/portfolio5.webp";
import image6 from "../../assests/portfolio6.webp";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: image1,
      title: "Lorem ipsum dolor sit amet consectetur",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 2,
      image: image2,
      title: "Lorem ipsum dolor sit amet consectetur",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 3,
      image: image3,
      title: "Lorem ipsum dolor sit amet consectetur",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 4,
      image: image4,
      title: "Lorem ipsum dolor sit amet consectetur",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 5,
      image: image5,
      title: "Lorem ipsum dolor sit amet consectetur",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 6,
      image: image6,
      title: "Lorem ipsum dolor sit amet consectetur",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>
      <div className="container portfolio__container">
        {data.map((elem) => {
          return (
            <>
              <article className="portfolio__item" key={elem.id}>
                <div className="portfolio__items-image">
                  <img src={elem.image} alt="images" />
                </div>
                <h3>{elem.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={elem.github} className="btn">
                    Github
                  </a>
                  <a href={elem.demo} className="btn btn-primary">
                    LiveDemo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
