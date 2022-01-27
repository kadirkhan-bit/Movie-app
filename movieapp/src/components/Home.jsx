import { React, useEffect } from "react";
import MovieListing from "./MovieListing";
import movieApi from "../common/movieApi";
import { APIkey } from "../common/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../services/movies";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await movieApi
        .get(`?apiKey=${APIkey}&s=harry&type=movie`)
        .catch((err) => console.log("api error", err));
      dispatch(addMovies(response.data));
    })();
  }, []);

  return (
    <>
      <div className="banner"></div>
      <MovieListing />
    </>
  );
};

export default Home;
