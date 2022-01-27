import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <div className="logo">Disney+</div>
      </Link>
      <div className="user">User</div>
    </div>
  );
};

export default Header;
