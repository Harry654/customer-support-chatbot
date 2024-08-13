"use client";

import { useAuth } from "@/context/AuthContext";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <script src="js/jquery-1.12.1.min.js" async={true}></script>
        <script src="js/popper.min.js" async={true}></script>
        <script src="js/bootstrap.min.js" async={true}></script>
        <script src="js/jquery.magnific-popup.js" async={true}></script>
        <script src="js/swiper.min.js" async={true}></script>
        <script src="js/masonry.pkgd.js" async={true}></script>
        <script src="js/owl.carousel.min.js" async={true}></script>
        <script src="js/slick.min.js" async={true}></script>
        <script src="js/gijgo.min.js" async={true}></script>
        <script src="js/jquery.nice-select.min.js" async={true}></script>
        <script src="js/custom.js" async={true}></script>
      </Head>

      <div>
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
                      Together creeping heaven upon third dominion be upon
                      won&appso;t darkness rule land behold it created good saw
                      after she&appso;d Our set living. Signs midst dominion
                      creepeth morning
                    </p>
                    <div className="menu_btn">
                      <a href="/book" className="btn_4">
                        book a table
                      </a>
                    </div>
                  </div>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                            <p>
                              They&appso;re wherein heaven seed hath nothing
                            </p>
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
                    Heaven fruitful doesn&appso;t over for these theheaven
                    fruitful doe over days appear creeping seasons sad behold
                    beari ath of it fly signs bearing be one blessed after.
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
                    Heaven fruitful doesn&appso;t over lesser in days. Appear
                    creeping seas
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
