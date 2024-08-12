"use client";

import ChatModal from "@/components/ChatModal";
import { useAuth } from "@/context/AuthContext";
import Head from "next/head";
import { useState } from "react";
import Chat from "@/components/Chat";

export default function Home() {
  const { user } = useAuth();
  const [modalState, setModalState] = useState<boolean>(false);

  const handleOpenModal: Function = (newState: boolean): void =>
    setModalState(newState);

  return (
    <>
      <Head>
        <script src="js/jquery-1.12.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.magnific-popup.js"></script>
        <script src="js/swiper.min.js"></script>
        <script src="js/masonry.pkgd.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/gijgo.min.js"></script>
        <script src="js/jquery.nice-select.min.js"></script>
        <script src="js/custom.js"></script>
      </Head>

      <div style={{ overflowY: modalState ? "hidden" : "scroll" }}>
        <ChatModal
          isOpen={modalState}
          handleClose={() => handleOpenModal(false)}
        >
          <Chat />
        </ChatModal>

        <header className="main_menu home_menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 z-10">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="/">
                    <img id="logo" src="/img/logo.png" alt="logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse main-menu-item justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="food_menu.html">
                          Menu
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="chefs.html">
                          Chefs
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="blog.html"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Blog
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="blog.html">
                            Blog
                          </a>
                          <a className="dropdown-item" href="single-blog.html">
                            Single blog
                          </a>
                          <a className="dropdown-item" href="elements.html">
                            Elements
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu_btn">
                    <a href="#book_a_table" className="btn_1 d-none d-sm-block">
                      book a table
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <section className="banner_part">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner_text">
                  <div className="banner_text_iner">
                    <h5>
                      {user?.displayName
                        ? "Welcome to Silver Spoons, " +
                          user.displayName.split(" ")[0]
                        : "Welcome to Silver Spoons"}
                    </h5>
                    <h1>Deliciousness jumping into the mouth</h1>
                    <p>
                      Together creeping heaven upon third dominion be upon won't
                      darkness rule land behold it created good saw after she'd
                      Our set living. Signs midst dominion creepeth morning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="book_a_table" className="regervation_part section_padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="section_tittle">
                  <p>Reservation</p>
                  <h2>Book A Table</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="regervation_part_iner">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Name *"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Email address *"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <select className="form-control" id="Select">
                          <option value="1" selected>
                            Persons *
                          </option>
                          <option value="2">Number of guests 1</option>
                          <option value="3">Number of guests 2</option>
                          <option value="4">Number of guests 3</option>
                          <option value="5">Number of guests 4</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="pnone"
                          placeholder="Phone number *"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <div className="input-group date">
                          <input
                            id="datepicker"
                            type="text"
                            className="form-control"
                            placeholder="Date *"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <select className="form-control" id="Select2">
                          <option value="" selected>
                            Time *
                          </option>
                          <option value="1">8 AM TO 10AM</option>
                          <option value="1">10 AM TO 12PM</option>
                          <option value="1">12PM TO 2PM</option>
                          <option value="1">2PM TO 4PM</option>
                          <option value="1">4PM TO 6PM</option>
                          <option value="1">6PM TO 8PM</option>
                          <option value="1">4PM TO 10PM</option>
                          <option value="1">10PM TO 12PM</option>
                        </select>
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          className="form-control"
                          id="Textarea"
                          rows={4}
                          placeholder="Your Note *"
                        ></textarea>
                      </div>
                    </div>

                    <div className="regerv_btn">
                      <a href="#" className="btn_4">
                        Book A Table
                      </a>
                    </div>
                    <p>
                      Not sure what to do? Chat with our{" "}
                      <button
                        className="text-white"
                        type="button"
                        onClick={() => handleOpenModal(true)}
                      >
                        customer support
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="about_part">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-4 col-lg-5 offset-lg-1">
                <div className="about_img">
                  <img src="/img/about.png" alt="" />
                </div>
              </div>
              <div className="col-sm-8 col-lg-4">
                <div className="about_text">
                  <h5>Our History</h5>
                  <h2>Where The Food&apos;s As Good As The Root Beer.</h2>
                  <h4>Satisfying people hunger for simple pleasures</h4>
                  <p>
                    May over was. Be signs two. Spirit. Brought said dry own
                    firmament lesser best sixth deep abundantly bearing, him,
                    gathering you blessed bearing he our position best ticket in
                    month hole deep{" "}
                  </p>
                  <a href="#" className="btn_3">
                    Read More <img src="/img/icon/left_2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


    


        <section className="food_menu gray_bg">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="section_tittle">
                  <p>Popular Menu</p>
                  <h2>Delicious Food Menu</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="nav nav-tabs food_menu_nav"
                  id="myTab"
                  role="tablist"
                >
                  <a
                    className="active"
                    id="Special-tab"
                    data-toggle="tab"
                    href="#Special"
                    role="tab"
                    aria-controls="Special"
                    aria-selected="false"
                  >
                    Special <img src="/img/icon/play.svg" alt="play" />
                  </a>
                  <a
                    id="Breakfast-tab"
                    data-toggle="tab"
                    href="#Breakfast"
                    role="tab"
                    aria-controls="Breakfast"
                    aria-selected="false"
                  >
                    Breakfast <img src="/img/icon/play.svg" alt="play" />
                  </a>
                  <a
                    id="Launch-tab"
                    data-toggle="tab"
                    href="#Launch"
                    role="tab"
                    aria-controls="Launch"
                    aria-selected="false"
                  >
                    Launch <img src="/img/icon/play.svg" alt="play" />
                  </a>
                  <a
                    id="Dinner-tab"
                    data-toggle="tab"
                    href="#Dinner"
                    role="tab"
                    aria-controls="Dinner"
                    aria-selected="false"
                  >
                    Dinner <img src="/img/icon/play.svg" alt="play" />{" "}
                  </a>
                  <a
                    id="Sneaks-tab"
                    data-toggle="tab"
                    href="#Sneaks"
                    role="tab"
                    aria-controls="Sneaks"
                    aria-selected="false"
                  >
                    Sneaks <img src="/img/icon/play.svg" alt="play" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active single-member"
                    id="Special"
                    role="tabpanel"
                    aria-labelledby="Special-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_1.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Pork Sandwich</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_2.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Roasted Marrow</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_3.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Summer Cooking</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_4.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Easter Delight</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_5.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Tiener Schnitze</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_6.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Chicken Roast</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade single-member"
                    id="Breakfast"
                    role="tabpanel"
                    aria-labelledby="Breakfast-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_4.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Easter Delight</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_5.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Tiener Schnitze</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_6.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Chicken Roast</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_1.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Pork Sandwich</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_2.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Roasted Marrow</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_3.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Summer Cooking</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade single-member"
                    id="Launch"
                    role="tabpanel"
                    aria-labelledby="Launch-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_1.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Pork Sandwich</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_2.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Roasted Marrow</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_3.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Summer Cooking</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_4.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Easter Delight</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_5.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Tiener Schnitze</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_6.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Chicken Roast</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade single-member"
                    id="Dinner"
                    role="tabpanel"
                    aria-labelledby="Dinner-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_4.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Easter Delight</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_5.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Tiener Schnitze</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_6.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Chicken Roast</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_1.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Pork Sandwich</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_2.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Roasted Marrow</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_3.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Summer Cooking</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade single-member"
                    id="Sneaks"
                    role="tabpanel"
                    aria-labelledby="Sneaks-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_1.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Pork Sandwich</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_2.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Roasted Marrow</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_3.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Summer Cooking</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_4.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Easter Delight</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_5.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Tiener Schnitze</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/img/food_menu/single_food_6.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Chicken Roast</h3>
                            <p>They're wherein heaven seed hath nothing</p>
                            <h5>$40.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                <div className="single-footer-widget footer_1">
                  <h4>About Us</h4>
                  <p>
                    Heaven fruitful doesn't over for these theheaven fruitful
                    doe over days appear creeping seasons sad behold beari ath
                    of it fly signs bearing be one blessed after.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-2 col-lg-3">
                <div className="single-footer-widget footer_2">
                  <h4>Important Link</h4>
                  <div className="contact_info">
                    <ul>
                      <li>
                        <a href="#">WHMCS-bridge</a>
                      </li>
                      <li>
                        <a href="#"> Search Domain</a>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="#"> Our Shop</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                <div className="single-footer-widget footer_2">
                  <h4>Contact us</h4>
                  <div className="contact_info">
                    <p>
                      <span> Address :</span>Hath of it fly signs bear be one
                      blessed after{" "}
                    </p>
                    <p>
                      <span> Phone :</span> +2 36 265 (8060)
                    </p>
                    <p>
                      <span> Email : </span>info@colorlib.com{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
                <div className="single-footer-widget footer_3">
                  <h4>Newsletter</h4>
                  <p>
                    Heaven fruitful doesn't over lesser in days. Appear creeping
                    seas
                  </p>
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <div className="input-group-append">
                          <button className="btn" type="button">
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="copyright_part_text">
              <div className="row">
                <div className="col-lg-8">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="ti-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </div>
                <div className="col-lg-4">
                  <div className="copyright_social_icon text-right">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="ti-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
