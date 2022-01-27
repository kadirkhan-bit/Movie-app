import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.Movie.movies);
  //console.log(movies);

  if (!(movies.Response === "True")) return "Loading...";

  return (
    <div className="movie-wrapper">
      <h2>Movies</h2>
      <div className="movie-container">
        {movies?.Search?.map((movie) => (
          <MovieCard key={movie.imdbID} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListing;
