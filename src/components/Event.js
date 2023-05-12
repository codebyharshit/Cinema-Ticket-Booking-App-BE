import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./Event.scss";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Image } from "react-bootstrap";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Event = () => {
  // Variable to show Images on omepage as Events
  const events = [
    "https://api.time.com/wp-content/uploads/2022/12/4-1.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/ypxsBbabpXc2aXhMhjwnrJPGmm4/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2020/03/31/932/n/1922283/983de8085e83b4a9dc3d15.52422073_/i/foreign-movies-on-netflix.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAkZ5u3UlAAYn_cSSNRmQ3DthiEhUuqEe9A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_7Q3ToeIwogH2KmVxVQP95ex4ozKuisX2IVBukhs4ABkhs0mXcYe36HUTp0ILt2qHpU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Fe5shsdMWk9n-piSuIJFtYcGrObSiZJeNyLbY5Q4BclXtNAbtlCS0tw7-6KQlWbx07M&usqp=CAU",
  ];

  return (
    <div className="text-center mt-3">
      <div className="container px-0 mt-3">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
        >
          {events.map((event, i) => (
            <SwiperSlide key={i}>
              <Image className="img-event" src={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Event;
