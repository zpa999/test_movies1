import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMoives = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies: movies.data.data.movies, isLoading: false });
  };

  componentDidMount() {
    this.getMoives();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
