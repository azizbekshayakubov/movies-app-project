/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_icon"
            src="

https://files.readme.io/29c6fee-blue_short.svg "
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        <Link to="/people" style={{ textDecoration: "none" }}>
          <span>People</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
