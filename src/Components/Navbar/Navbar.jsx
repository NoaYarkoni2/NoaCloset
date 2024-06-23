import React from "react";
import "../Navbar/Navbar.css";
import shoppingLogo from "../../assets/shoppingLogo.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={shoppingLogo} alt="" />
          {/* <p> Noa Yarkoni | Closet</p> */}
          <li onClick={() => handleClick("/")}>
            <a className="link"> Noa Yarkoni | Closet</a>
          </li>
        </div>
        <div className="nav-menu">
          <ul>
            <li onClick={() => handleClick("/shop")}>
              <a className="link">Shop</a>
            </li>
            <li onClick={() => handleClick("/mens")}>
              <a className="link">Men</a>
            </li>
            <li onClick={() => handleClick("/womens")}>
              <a className="link">Women</a>
            </li>
            <li onClick={() => handleClick("/accessories")}>
              <a className="link">Accessories</a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <button
            class="btn white-btn"
            id="loginBtn"
            onClick={() => handleClick("/login")}
          >
            Sign In
          </button>
          <button
            class="btn"
            id="RegisterBtn"
            onClick={() => handleClick("/register")}
          >
            Sign Up
          </button>
        </div>
        <Link to="cart">
          <img src={cart} alt="" />
        </Link>
      </div>
      {/* <div className="nav-cart-count">0</div> */}
    </>
  );
}

export default Navbar;
