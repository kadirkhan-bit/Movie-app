import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "../services/movies";

const Header = () => {
  const [searchText, setSearchText] = useState("Harry");
  const dispatch = useDispatch();
  const text = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchText(text.current.value);
  };
  useEffect(() => {
    dispatch(fetchMovies(searchText));
    dispatch(fetchShows(searchText));
  }, [searchText]);

  useEffect(() => {
    dispatch(fetchMovies("bond"));
    dispatch(fetchShows("Friends"));
  }, []);

  return (
    <div className="Header">
      <Link to="/">
        <div className="logo">Disney+</div>
      </Link>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input type="text" ref={text} placeholder="Search Movies or Shows" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="user">User</div>
    </div>
  );
};

export default Header;
