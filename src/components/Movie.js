import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ title, year, summary, poster, genres, rating, large_poster }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: { title, year, summary, poster, genres, rating },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h1 className="movie__title">{title}</h1>

          <h2>rating : {rating}</h2>
          <ul className="movie__ul">
            {genres.map((genre) => {
              return <li className="movie__genre">{genre}</li>;
            })}
          </ul>
          <h3 className="movie__year">{year}</h3>
          <p className="moive__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
