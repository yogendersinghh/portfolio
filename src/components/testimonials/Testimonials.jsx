import React from "react";
import "./testimonials.css";
import image1 from "../../assests/image5.jpg";
import image2 from "../../assests/image4.jpg";
import image3 from "../../assests/image6.jpg";
import image4 from "../../assests/image8.jpg";

import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: image1,
      name: "Earnest Achiver",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt optio recusandae natus corporis adipisci inventore ipsum!Consectetur inventore sunt amet.",
    },
    {
      id: 2,
      image: image2,
      name: "Earnest Achiver",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt optio recusandae natus corporis adipisci inventore ipsum!Consectetur inventore sunt amet.",
    },
    {
      id: 3,
      image: image3,
      name: "Earnest Achiver",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt optio recusandae natus corporis adipisci inventore ipsum!Consectetur inventore sunt amet.",
    },
    {
      id: 4,
      image: image4,
      name: "Earnest Achiver",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt optio recusandae natus corporis adipisci inventore ipsum!Consectetur inventore sunt amet.",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        // scrollbar={{ draggable: true }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((elem) => {
          return (
            <>
              <SwiperSlide className="testimonial" key={elem.id}>
                <div className="client__avatar">
                  <img src={elem.image} alt="images" />
                </div>
                <div>
                  <h5 className="client__name">{elem.name}</h5>
                  <small className="client__review">{elem.review}</small>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
