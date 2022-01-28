import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../services/movies";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const { Poster, Title, imdbRating, imdbVotes, Runtime, Year } = useSelector(
    (state) => state.Movie.details
  );

  useEffect(() => {
    dispatch(fetchDetails(imdbId));
  }, [imdbId, dispatch]);

  return (
    <>
      <div className="movie-details">
        <div className="movie-left">
          <div className="title">
            <h1>{Title}</h1>
          </div>
          <div className="ratings">
            <div className="imdb-rating">IMDB Rating : {imdbRating}</div>
            <div className="imdb-votes">IMDB Votes : {imdbVotes}</div>
            <div className="runtine">Runtime : {Runtime}</div>
            <div className="Year">Year : {Year}</div>
          </div>
        </div>
        <div className="movie-right">
          <img src={Poster} alt="Poster" />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
