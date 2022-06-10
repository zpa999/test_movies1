import React from "react";
import "./Detail.css";

function Detail(props) {
  console.log(props.location.state.poster);

  const backgroundImageURL = props.location.state.large_poster;
  const containerStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
  };

  return (
    <div className="movie">
      <img
        src={props.location.state.poster}
        alt={props.location.state.title}
        title={props.location.state.title}
      />
      <div className="movie__data">
        <h1 className="movie__title">{props.location.state.title}</h1>

        <h2>rating : {props.location.state.rating}</h2>
        <ul className="movie__ul">
          {props.location.state.genres.map((genre) => {
            return <li className="movie__genre">{genre}</li>;
          })}
        </ul>
        <h3 className="movie__year">{props.location.state.year}</h3>
        <p className="moive__summary">
          {props.location.state.summary.slice(0, 180)}...
        </p>
      </div>
    </div>
  );
}

export default Detail;
