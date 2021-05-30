import React from "react";
import cartIcon from "../assets/black-cart.svg";
import { Link } from "react-router-dom";

function Nav({ showCart }) {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-logo">
        <h3>MyShop</h3>
      </Link>
      {showCart && (
        <Link to="/cart" className="nav-cart-btn">
          <img className="nav-cart-icon" src={cartIcon} alt="cart-icon" />
        </Link>
      )}
    </div>
  );
}

export default Nav;
