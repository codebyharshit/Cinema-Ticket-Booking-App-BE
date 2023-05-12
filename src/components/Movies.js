// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import moment from "moment";
import axios from "axios";

function Movies() {
  // Fetch movies data from the backend API using useEffect hook
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get("http://localhost:3000/fetchMovie");
      const Movies = await response.data;
      const allMovies = await Movies.result;
      console.log(allMovies);
      setMovies(allMovies);
    };
    getMovies();
  }, []);

  // Set state to hold the fetched movies data
  const [movies, setMovies] = useState([]);

  // Component to render the list of movies
  const MovieList = React.memo(({ data }) => (
    <main className="flex-shrink-0">
      <Container className="w-60">
        <h3 className="text-center">Movies Showing</h3>
        <Row md={4}>
          {data.map((item, i) => {
            const url = "/movies/detail/" + item.title;
            return (
              <Col
                className="d-flex align-items-end flex-column mt-3 m-4" // Style the movie item and add spacing
                key={i}
              >
                <Row className="movie-item">
                  <Link className="movie-item-link" to={url}>
                    <Image
                      className="movie-poster"
                      src={item.poster}
                      width={220}
                      height={350}
                    />
                    <h3 className="fw-bold fs-movie-title mt-2">
                      {item.title}
                    </h3>
                  </Link>
                </Row>
                <Row className="mt-auto">
                  <div className="px-0">
                    <span className="mt-1 text-line">
                      <span className="fw-bold ">Category: </span>
                      {item.genre}
                    </span>
                  </div>
                  <div className="px-0">
                    <span className="fw-bold mt-1">Premiere: </span>
                    <span>
                      {" "}
                      {moment(item.release_date).format("DD/MM/YYYY")}
                    </span>
                  </div>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  ));

  // Render the MovieList component with the fetched movies data as props
  return <MovieList data={movies} />;
}

export default Movies;
