import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={require("../img/Satiate-Logo.webp")}
                alt="A guy driving to deliver the order"
                width="40px"
                height="40px"
                class="satiate-logo"
              />
            </a>
            <a
              class="navbar-brand ms-1 me-auto fw-bold"
              href="/"
              rel="noopener noreferrer"
            >
              Satiate
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-label="Toggle Menu Links"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/" rel="noopener noreferrer">
                    Menu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/" rel="noopener noreferrer">
                    Restaurants
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/OrderProcessing"
                    rel="noopener noreferrer"
                  >
                    Order Processing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/" rel="noopener noreferrer">
                    Order Tracking
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#contactUs"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="d-flex navbar-cta"
              >
                <img
                  src={require("../img/cart.png")}
                  alt="Cart Icon"
                  width="30px"
                  height="30px"
                  class="cart-icon"
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="d-flex navbar-cta"
              >
                <img
                  src={require("../img/user.png")}
                  alt="User Profile Icon"
                  width="30px"
                  height="30px"
                  class="user-profile-icon"
                />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
