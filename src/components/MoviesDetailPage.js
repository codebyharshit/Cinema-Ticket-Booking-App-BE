import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MoviesDetailPage() {
  // Get the slug from the URL parameter
  const { slug } = useParams();

  // Set the initial states of the component
  const [movieInfo, setMovieInfo] = useState("");
  const [showtime, setShowtime] = useState("");
  const [ticketCount, setTicketCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle the showtime selection
  const handleSelect = (event) => {
    console.log(event.target.value);
    setShowtime(event.target.value);
  };

  // Function to handle the ticket count input change
  const handleInputChange = (e) => {
    setTicketCount(e.target.value);
  };

  // Fetch movie details from API using axios on mount and set the movieInfo state
  useEffect(() => {
    const movieDetails = async () => {
      const response = await axios.get(
        `http://localhost:3000/getMovieInfo?movie=${slug}`
      );
      const movieData = response.data;
      console.log(typeof movieData.result.ticketsAvailable);
      setMovieInfo(movieData.result);
    };
    movieDetails();
  }, []);

  // Function to handle the ticket booking
  const handleTicketBooking = async () => {
    // Prepare data to be sent in the PUT request
    const updateData = {
      movieInfo: {
        ...movieInfo,
        ticketsAvailable: movieInfo.ticketsAvailable - ticketCount,
      },
    };

    // Make a PUT request to update the ticketsAvailable value in the database
    const response = await axios.put(
      `http://localhost:3000/bookTickets?movie=${slug}`,
      updateData
    );
    console.log("response", response);

    // Show a success message to the user and offer the option to download tickets
    Swal.fire({
      title: "Tickets Booked Successfully!",
      text: "Your movie tickets booked successfully!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Download Tickets",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        downloadTickets();
      }
    });
  };

  // Function to download the tickets
  const downloadTickets = async () => {
    // Make a GET request to download the tickets from the server
    const { data } = await axios.get(
      `http://localhost:3000/downloadTickets?movie=${slug}&ticket=${ticketCount}&date=${selectedDate}&show=${showtime}`
    );
    console.log("data", data);
    const result = await data.result;
    console.log("result", result);
    const resultArray = await Object.values(result);

    // Create a file object and download it
    const file = new Blob([resultArray], { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "tickets-" + Date.now() + ".txt";
    document.body.appendChild(element);
    element.click();
  };

  // Function to extract the Youtube video ID from a URL
  const getYoutubeVideoId = (url) => {
    if (!url) {
      return null;
    }

    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const VideoIframe = React.memo(({ src, height }) => (
    <iframe
      className="px-0 mb-0"
      title={movieInfo.title}
      controls
      height={height}
      allowFullScreen
      src={src}
    />
  ));

  const ScrollToTopOnMount = () => {
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return null;
  };

  return (
    <main className="flex-shrink-0">
      <ScrollToTopOnMount />
      <Container className="w-60">
        <Row>
          <Col md={3} className="px-0">
            <div>
              <Image
                src={movieInfo.poster}
                height={345}
                className="img-cover w-100"
              ></Image>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="fw-bold">{movieInfo.title}</h5>
            </div>
            <hr className="my-1" />
            <div>
              <span className="fw-bold">Director:</span>
              <span>{movieInfo.director}</span>
            </div>
            <div>
              <span className="fw-bold">Cast: </span>
              <span>{movieInfo.actor}</span>
            </div>
            <div>
              <span className="fw-bold">Category: </span>
              <span>{movieInfo.genre}</span>
            </div>
            <div>
              <span className="fw-bold">Premiere:</span>
              <span>{moment(movieInfo.release_date).format("DD/MM/YYYY")}</span>
            </div>
            <div>
              <span className="fw-bold">Available Tickets:</span>
              <span>{movieInfo.ticketsAvailable}</span>
            </div>

            <div>
              <div>
                <label className="text-lg font-bold">No. of Tickets</label>
              </div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text"
                placeholder="Enter no. of Tickets"
                value={ticketCount}
                onChange={handleInputChange}
              />
              <div className="flex items-center ">
                <div className="mt-2">
                  <label
                    htmlFor="showtime-select"
                    className="text-lg font-bold"
                  >
                    Select Showtime:
                  </label>
                </div>
                <div className="">
                  <select
                    id="showtime-select"
                    value={showtime}
                    onChange={handleSelect}
                    className="px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                  >
                    <option value="">--Select a Showtime--</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <label htmlFor="date-picker" className="text-lg font-bold mt-2">
                  Select a Date:
                </label>
                <DatePicker
                  id="date-picker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="mr-2">
              <button
                className="py-2 border rounded-md  mt-2 mr-4"
                onClick={handleTicketBooking}
              >
                Book Tickets
              </button>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <p className="px-0 mb-0">{movieInfo.description}</p>
        </Row>
        <Row className="mt-2 text-center">
          <VideoIframe
            height={444}
            src={`https://www.youtube.com/embed/${getYoutubeVideoId(
              movieInfo.trailer
            )}`}
          />
        </Row>
      </Container>
    </main>
  );
}

export default MoviesDetailPage;
