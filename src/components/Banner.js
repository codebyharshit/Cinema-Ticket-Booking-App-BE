import React from "react";
import "./banner.scss";

function Banner() {
  // Variable to store the images to show as banner on Homepage
  const banners = [
    "https://i.pinimg.com/564x/5d/73/e1/5d73e13ac419679dac178e21e935e51b.jpg",
  ];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {banners.map((url, i) => {
          let className = i === 0 ? "carousel-item active" : "carousel-item";
          return (
            <div key={i} className={className} data-bs-interval={3000}>
              <img
                src={url}
                className="mx-auto d-block w-45 h-75 img-banner"
                alt={"slide" + i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
