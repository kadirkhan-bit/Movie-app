import { React, useEffect } from "react";
import MovieListing from "./MovieListing";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchShows } from "../services/movies";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Movie.loading);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="banner"></div>
      <MovieListing />
    </>
  );
};

export default Home;
