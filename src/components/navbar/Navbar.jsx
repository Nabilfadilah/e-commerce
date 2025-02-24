import React from "react";
import "./Navbar.css";
import {IoSearch} from "react-icons/io5";
import {MdOutlineShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">ID</span>
          <div className="navbar-searchContainer">
            <input type="text" placeholder="Search" className="navbar-input" />
            <IoSearch className="icon" />
          </div>
        </div>

        <div className="navbar-center">
          <h1 className="navbar-logo">
            NgodingBil <span>.</span>
          </h1>
        </div>

        <div className="navbar-right">
          <Link to="/register">
            <div className="navbar-menuItem">Register</div>
          </Link>
          <div className="navbar-menuItem">Login</div>
          <div className="navbar-menuItem">
            <MdOutlineShoppingCart className="icon" />
            <span className="cart-badge"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
