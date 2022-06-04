import { useState, useEffect } from "react";
import axios from "../axios";
import './Row.css'

const imageUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // a snippet pf code which runs based on a specific condition/variable using useEffect
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* containers -> posters */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.name}
            className='row__poster'
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
