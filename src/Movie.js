import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h1 className="movie__title">{title}</h1>
        <ul>
          {genres.map((genre) => {
            return <li className="movie__genre">{genre}</li>;
          })}
        </ul>
        <h3 className="movie__year">{year}</h3>
        <h5 className="moive__summary">{summary}</h5>
        <hr />
      </div>
    </div>
  );
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
