import React, { Component } from "react";
import NewsletterSubscription from "./Subscribe";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div class="container text-center justify-content-center">
            <div class="row col-lg-12 mb-1 mt-5 footer-div">
              <div class="col-lg-3 mb-4 footer-brand">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require("../img/Satiate-Logo.webp")}
                    alt="A guy driving to deliver the order"
                    width="50px"
                    height="50px"
                  />
                </a>
                <a class="ms-1 mx-auto brand-name" href="/">
                  Satiate
                </a>
                <p class="description">
                  Is an online food delivery services in the Philippines that
                  offers a wide section of restaurants and cuisines to cater to
                  your unique taste buds. We provide an extensive restaurant
                  selection, ensuring a diverse range of options to satisy any
                  craving.
                </p>
                <div className="contact-info">
                  <p>
                    Phone: <span>+63-912-345-6789</span>
                  </p>
                  <p>
                    Email: <span>info@satiate.com</span>
                  </p>
                  <p>
                    Live Chat Support: <span>[Live Chat Support Link]</span>
                  </p>
                </div>
              </div>
              <div class="col-lg-2 offset-1 second-column-f">
                <ul className="footer-nav-links">
                  <li class="column-two-f">
                    <a href="/">Menu</a>
                  </li>
                  <li>
                    <a href="/">Merchants</a>
                  </li>
                  <li>
                    <a href="/OrderProcessing">Order Processing</a>
                  </li>
                  <li>
                    <a href="/">Order Tracking</a>
                  </li>
                  <li>
                    <a href="/AboutUs">About Us</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <ul>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <a href="/">Guides</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Financial Services</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 subscribe-column">
                <NewsletterSubscription />
                <div class="follow">
                  <h5 class="mt-4 footer-right">Follow our Social Media</h5>
                  <a href="/" target="_blank">
                    <img
                      src={require("../img/Facebook-icon-black.png")}
                      alt="Facebook Icon"
                      width="40px"
                      height="auto"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <img
                      src={require("../img/Instagram-icon-black.png")}
                      alt="Instagram Icon"
                      width="40px"
                      height="auto"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <img
                      src={require("../img/TikTok-icon-black.png")}
                      alt="TikTok Icon"
                      width="40px"
                      height="auto"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <img
                      src={require("../img/Twitter-icon-black.png")}
                      alt="Twitter Icon"
                      width="40px"
                      height="auto"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <img
                      src={require("../img/YouTube-icon-black.png")}
                      alt="YouTube Icon"
                      width="40px"
                      height="auto"
                    />
                  </a>
                </div>
              </div>
              <div class="row col-lg-12 mt-5 text-center privacy-terms">
                <p>
                  <a href="/">Privacy Policy</a> |{" "}
                  <a href="/">Terms and Conditions</a>
                </p>
              </div>
              <div class="row col-lg-12 mt-1 copyright text-center">
                <p>
                  © Copyright 2023{" "}
                  <a href="/" target="/">
                    <strong>The TECH Dreamers</strong>
                  </a>
                  . All rights reserved. Published by The TECH Dreamers of
                  KodeGo
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
