import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <div>
                  <img
                    className="logo"
                    src="https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55"
                    alt=""
                  />
                </div>
              </li>
              <li className="nav-item">
                <Link className="dashboard-link" to={"/"}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="product-link" to={"/product"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="cart-link" to={"/cart"}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
