import { React, useEffect } from "react";
import MovieListing from "./MovieListing";

import { useDispatch } from "react-redux";
import { addMovies, fetchMovies } from "../services/movies";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <div className="banner"></div>
      <MovieListing />
    </>
  );
};

export default Home;
