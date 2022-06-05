import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

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

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imageUrl}${movies?.backdrop_path})`,
        backgroundPosition: "center center",
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

        <h3 className="banner__description">{movies?.overview}</h3>
      </div>
    </header>
  );
};

export default Banner;
