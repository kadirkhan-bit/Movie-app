import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.Movie.movies);
  const shows = useSelector((state) => state.Movie.shows);

  if (!(movies.Response === "True")) return "Loading...";

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies?.Search?.map((movie) => (
            <MovieCard key={movie.imdbID} data={movie} />
          ))}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {shows?.Search?.map((movie) => (
            <MovieCard key={movie.imdbID} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
