import React from "react";
import Banner from "./Banner";
import Event from "./Event";

// Home Page code which includes the latest movies showing in our Theature
const Home = () => {
  console.log("hello");
  return (
    <div className="flex">
      <div className="container">
        <div
          className="bg-cover h-screen"
          style={{
            backgroundImage: `url(${"https://i.pinimg.com/564x/5d/73/e1/5d73e13ac419679dac178e21e935e51b.jpg"})`,
          }}
        >
          <Banner />
        </div>
        <Event />
      </div>
    </div>
  );
};

export default Home;
