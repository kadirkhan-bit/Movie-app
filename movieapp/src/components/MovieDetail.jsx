import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../services/movies";
import "./MovieDetail.scss";
import LoadingSpinner from "./LoadingSpinner";

const MovieDetail = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const {
    Poster,
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
  } = useSelector((state) => state.Movie.details);
  const loading = useSelector((state) => state.Movie.loading);

  useEffect(() => {
    dispatch(fetchDetails(imdbId));
  }, [imdbId, dispatch]);

  if (loading) return <LoadingSpinner />;

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
          <div className="plot">{Plot}</div>
          <div className="info">
            <span className="details">Director</span>
            <span className="details-value">{Director}</span>
            <span className="details">Stars</span>
            <span className="details-value">{Actors}</span>
            <span className="details">Genres</span>
            <span className="details-value">{Genre}</span>
            <span className="details">Languages</span>
            <span className="details-value">{Language}</span>
            <span className="details">Awards</span>
            <span className="details-value">{Awards}</span>
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
