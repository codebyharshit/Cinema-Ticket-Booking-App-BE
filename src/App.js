import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MoviesDetailPage from "./components/MoviesDetailPage";
import AddMovie from "./components/AddMovie";

// App component is the main component which holds the all other components render in it
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/movies/detail/:slug" element={<MoviesDetailPage />} />
        <Route exact path="/addMovie" element={<AddMovie />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
