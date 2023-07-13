import { Component } from "react";
import "../css/styles.css";

class Home extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="row my-4">
            <h1 class="display-3 mt-4 fw-bold text-center text-danger">
              About Us
            </h1>
            <div class="row my-4 about-row">
              <div class="col-lg-5">
                <img
                  src={require("../img/Satiate-Logo.webp")}
                  alt="Satiate Logo"
                  class="img-fluid"
                />
              </div>
              <div class="col-lg-7">
                <h2>Company Overview:</h2>
                <p>
                  At Satiate, our mission is to connect people with their
                  favorite food and provide a seamless and delightful dining
                  experience. We envision a world where everyone can enjoy a
                  wide range of culinary delights conveniently and reliably. Our
                  core values revolve around customer satisfaction, innovation,
                  and fostering meaningful relationships with our partners and
                  the community. Satiate was born out of a passion for great
                  food and a desire to revolutionize the way people order and
                  enjoy meals. Since our inception, we have been on an
                  incredible journey, growing from a small startup to becoming a
                  leading food delivery platform in the industry. We have
                  expanded our services, enhanced our technology, and built
                  strong relationships with our valued customers and restaurant
                  partners.
                </p>
                <a
                  class="btn btn-primary about-cta col-lg-5 fs-5 text-center"
                  href="#services"
                  rel="noopener noreferrer"
                >
                  Discover more!
                </a>
              </div>
            </div>
            <div class="row my-4 about-row" id="#services">
              <div class="col-lg-7">
                <h2>Our Services:</h2>
                <p>
                  Satiate offers a range of services to cater to the diverse
                  needs of our customers and restaurant partners. Our primary
                  service is food delivery, where we bring a wide selection of
                  cuisines and dishes right to your doorstep. We partner with
                  renowned restaurants and eateries, ensuring that you have
                  access to the best culinary experiences in your area. Our
                  dedicated customer support team is available to assist you
                  throughout the ordering process, ensuring a smooth and
                  enjoyable experience.
                </p>
                <p>
                  What sets Satiate apart from other food delivery platforms is
                  our commitment to quality, reliability, and exceptional
                  customer service. We strive to exceed your expectations by
                  delivering your orders on time and ensuring that the food
                  arrives fresh and delicious. Our user-friendly interface and
                  intuitive app make it easy for you to browse menus, place
                  orders, and track deliveries, all with just a few taps.
                </p>
                <a
                  class="btn btn-primary about-cta col-lg-5 fs-5 text-center"
                  href="#team"
                  rel="noopener noreferrer"
                >
                  Discover more!
                </a>
              </div>
              <div class="col-lg-5">
                <video controls>
                  <source
                    src="../img/Satiate-video.mp4"
                    type="video/mp4"
                    width="100%"
                    height="100%"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div class="row my-4 about-row" id="#team">
              <div class="col-lg-12">
                <h2>Our Team: </h2>
                <p>
                  Behind Satiate's success is a team of passionate individuals
                  who bring their expertise, creativity, and dedication to the
                  table. Led by our visionary founders, our team comprises
                  professionals with diverse backgrounds in technology,
                  operations, marketing, and customer service. We are united by
                  a shared love for food and a common goal of providing the best
                  dining experiences for our customers.
                </p>
                <p>
                  Our team members are experienced professionals who have played
                  instrumental roles in shaping Satiate into what it is today.
                  With their extensive knowledge of the industry and
                  customer-centric approach, they continuously strive to
                  innovate and improve our services. We are proud of our team
                  and the collaborative spirit that drives us to deliver
                  excellence in all aspects of our operations.
                </p>
              </div>
              <div class="row text-center justify-content-center d-flex col-lg-12 ms-5">
                <div class="col-lg-4">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <div class="profile-image">
                          <img
                            src={require("../img/Praise-Nera.jpg")}
                            alt="Satiate Logo"
                            class="img-fluid"
                            width="200px"
                            height="200px"
                          />
                          <div class="name">Praise Ortega Nera</div>
                        </div>
                      </div>
                      <div class="flip-card-back">
                        <div class="Description">
                          <p class="description">
                            CTO, React.js Master, Head of Designs, Database
                            Administrator, Head of HTML and CSS and HiFi Mockup
                            Expert
                          </p>
                          <div class="socialbar">
                            <a
                              href="https://mastodon.social/"
                              id="mastodon"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Mastodon-icon-black.png")}
                                alt="Mastodon Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://www.instagram.com/"
                              id="instagram"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Instagram-icon-black.png")}
                                alt="Instagram Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://www.facebook.com/"
                              id="facebook"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Facebook-icon-black.png")}
                                alt="Facebook Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://twitter.com/"
                              id="twitter"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Twitter-icon-black.png")}
                                alt="Twitter Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <div class="profile-image">
                          <img
                            src={require("../img/Eugene-Magbanua.jpg")}
                            alt="Satiate Logo"
                            class="img-fluid"
                            width="200px"
                            height="200px"
                          />
                          <div class="name">Eugene Gayorgor Magbanua</div>
                        </div>
                      </div>
                      <div class="flip-card-back">
                        <div class="Description">
                          <p class="description">
                            HTML and CSS Assistant, Video Editor, Figma
                            Specialist, Logo Specialist, and Presentation
                            Specialist
                          </p>
                          <div class="socialbar">
                            <a
                              href="https://mastodon.social/"
                              id="mastodon"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Mastodon-icon-black.png")}
                                alt="Mastodon Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://www.instagram.com/"
                              id="instagram"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Instagram-icon-black.png")}
                                alt="Instagram Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://www.facebook.com/"
                              id="facebook"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Facebook-icon-black.png")}
                                alt="Facebook Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://twitter.com/"
                              id="twitter"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Twitter-icon-black.png")}
                                alt="Twitter Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <div class="profile-image">
                          <img
                            src={require("../img/Mark-Anthony-Tan.png")}
                            alt="Satiate Logo"
                            class="img-fluid"
                            width="200px"
                            height="200px"
                          />
                          <div class="name">Mark Anthony Tan</div>
                        </div>
                      </div>
                      <div class="flip-card-back">
                        <div class="Description">
                          <p class="description">
                            HTML, CSS and Bootstrap Assistant, Researcher,
                            Project Manager, Executive Assistant, React.js
                            Assistant, and All around assistant.
                          </p>
                          <div class="socialbar">
                            <a
                              href="https://mastodon.social/"
                              id="mastodon"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Mastodon-icon-black.png")}
                                alt="Mastodon Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://www.instagram.com/"
                              id="instagram"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Instagram-icon-black.png")}
                                alt="Instagram Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://www.facebook.com/"
                              id="facebook"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Facebook-icon-black.png")}
                                alt="Facebook Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>

                            <a
                              href="https://twitter.com/"
                              id="twitter"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={require("../img/Twitter-icon-black.png")}
                                alt="Twitter Icon"
                                width="30px"
                                height="30px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row my-4 about-row" id="#partners">
                <div class="col-lg-12 my-4">
                  <h2>Restaurant Partnerships: </h2>
                  <p>
                    Satiate values its partnerships with restaurants and
                    culinary establishments. We believe in fostering mutually
                    beneficial relationships that create value for both our
                    partners and customers. We work closely with our partner
                    restaurants, ensuring that they receive the support and
                    exposure they deserve.
                  </p>
                  <p>
                    As a Satiate partner, restaurants gain access to a wider
                    customer base and increased visibility. We provide a
                    platform that showcases their menus, specialties, and
                    promotions, allowing them to reach new customers and grow
                    their business. By joining Satiate, restaurants can
                    streamline their delivery operations, optimize their
                    resources, and focus on what they do best—crafting
                    exceptional dining experiences.
                  </p>
                </div>
                <div class="row col-lg-12 mt-4 text-center justify-content-center">
                  <div class="contact-card col-lg-3">
                    <a
                      href="https://www.jollibee.com.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../img/Jollibee-Logo.png")}
                        width="100px"
                        height="100px"
                        alt="Jollibee Logo"
                      />
                    </a>
                  </div>
                  <div class="contact-card col-lg-3">
                    <a
                      href="https://www.jollibee.com.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../img/McDonalds-Logo.png")}
                        width="100px"
                        height="100px"
                        alt="McDonald's Logo"
                      />
                    </a>
                  </div>
                  <div class="contact-card col-lg-3">
                    <a
                      href="https://greenwichdelivery.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../img/Greenwich_Pizza_Logo.png")}
                        width="100px"
                        height="100px"
                        alt="Greenwich Pizza Logo"
                      />
                    </a>
                  </div>
                  <div class="contact-card col-lg-3">
                    <a
                      href="https://www.blackscoopcafe.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../img/Black-scoop-cafe-Logo.png")}
                        width="100px"
                        height="100px"
                        alt="Black Scoop Cafe"
                      />
                    </a>
                  </div>
                  <div class="contact-card col-lg-3">
                    <a
                      href="https://www.facebook.com/koomiph/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../img/Koomi-Logo.png")}
                        width="100px"
                        height="100px"
                        alt="Koomi"
                      />
                    </a>
                  </div>
                  <div class="contact-card col-lg-3">
                    <a
                      href="https://www.tokyotokyodelivery.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../img/Tokyo-Tokyo-Logo.png")}
                        width="100px"
                        height="100px"
                        alt="Tokyo Tokyo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="row my-4 about-row" id="#community">
                <div class="col-lg-5">
                  <img
                    src={require("../img/community-engagement.jpg")}
                    alt="Communities working together"
                    class="img-fluid"
                  />
                </div>
                <div class="col-lg-7">
                  <h2>Community Engagement: </h2>
                  <p>
                    Satiate is committed to making a positive impact on the
                    communities we serve. We actively engage in initiatives that
                    promote community well-being, support local organizations,
                    and contribute to social causes. We collaborate with
                    charities, participate in food drives, and support local
                    events to give back to the communities that have embraced
                    us.
                  </p>
                  <p>
                    We are also dedicated to sustainability and social
                    responsibility. We continually explore ways to minimize our
                    environmental footprint, such as implementing eco-friendly
                    packaging solutions and partnering with environmentally
                    conscious suppliers. Through these efforts, we strive to
                    create a positive and lasting impact on the world around us.
                  </p>
                  <a
                    class="btn btn-primary about-cta col-lg-5 fs-5 text-center"
                    href="#reviews"
                    rel="noopener noreferrer"
                  >
                    Discover more!
                  </a>
                </div>
              </div>
              <div class="row my-4 about-row" id="#reviews">
                <div class="col-lg-7">
                  <h2>Testimonials and Reviews: </h2>
                  <p>
                    Don't just take our word for it—hear what our customers and
                    restaurant partners have to say about their experiences with
                    Satiate. We are proud to have received numerous positive
                    testimonials and reviews that highlight the value and
                    quality of our services.
                  </p>
                  <div></div>
                  <a
                    class="btn btn-primary about-cta col-lg-5 fs-5 text-center"
                    href="#contact"
                    rel="noopener noreferrer"
                  >
                    Discover more!
                  </a>
                </div>
                <div class="col-lg-5">
                  <img
                    src={require("../img/Happy-face.jpg")}
                    alt="Happy face when receiving the order"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="row my-4 about-row" id="#contact">
                <div class="col-lg-6">
                  <img
                    src={require("../img/Satiate-Logo.webp")}
                    alt="Satiate Logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-lg-6 contact-information">
                  <h2>Contact Information: </h2>
                  <p>
                    We would love to hear from you! For any inquiries, feedback,
                    or partnership opportunities, please reach out to us using
                    the following contact information:
                  </p>
                  <p>Mobile phone number: +63-912-345-6789</p>
                  <p>Telephone number: 078-567-8945</p>
                  <p>Email address: info@satiate.com</p>
                  <p>Social media Links: </p>
                  <ul>
                    <li>
                      {" "}
                      FB:{" "}
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @satiatefooddelivery
                      </a>
                    </li>
                    <li>
                      {" "}
                      Twitter:{" "}
                      <a
                        href="https://twitter.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @satiatefooddelivery
                      </a>
                    </li>
                    <li>
                      Instagram:{" "}
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @satiatefooddelivery
                      </a>
                    </li>
                    <li>
                      TikTok:{" "}
                      <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @satiatefooddelivery
                      </a>
                    </li>
                    <li>
                      YouTube:{" "}
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @satiatefooddelivery
                      </a>
                    </li>
                    <li>
                      {" "}
                      Telegram:{" "}
                      <a
                        href="https://telegram.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @satiatefooddelivery
                      </a>
                    </li>
                  </ul>
                  <div></div>
                  <a
                    class="btn btn-primary about-cta col-lg-5 fs-5 text-center"
                    href="/"
                    rel="noopener noreferrer"
                  >
                    Order Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
