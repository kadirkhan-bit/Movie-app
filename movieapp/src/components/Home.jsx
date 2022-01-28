import { React, useEffect } from "react";
import MovieListing from "./MovieListing";

import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "../services/movies";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, []);

  return (
    <>
      <div className="banner"></div>
      <MovieListing />
    </>
  );
};

export default Home;
