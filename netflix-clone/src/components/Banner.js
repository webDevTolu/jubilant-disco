import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import './Banner.css';

const imageUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request);

      // random number between 0 and the length of the array
      const randomMovie = Math.floor(
        Math.random() * request.data.results.length
      );
      // console.log(randomMovie);

      setMovies(request.data.results[randomMovie]);
    }
    fetchData();
  }, []);

  // truncate text
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imageUrl}${movies?.backdrop_path})`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movies?.name || movies?.title || movies?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h3 className="banner__description">{truncate(movies?.overview, 150)}</h3>
      </div>
      
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
