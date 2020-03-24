/* eslint jsx-a11y/anchor-is-valid: 0, jsx-a11y/alt-text:0 */
import React, { Component } from "react";
import Layout from "../component/Layout";

export default class Explore extends Component {
  constructor() {
    super();
    this.state = {
      properties: []
    };
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row mb-8 mt-5">
            <div className="col-lg-4 col-xl-3 order-lg-1 width-md-50">
              <div className="navbar-expand-lg navbar-expand-lg-collapse-block">
                <button
                  className="btn d-lg-none mt-3 mb-4 p-0 collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#sidebar"
                  aria-controls="sidebar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-caret-square-down text-primary font-size-20 card-btn-arrow ml-0" />
                  <span className="text-primary ml-2">Sidebar</span>
                </button>
                <div id="sidebar" className="collapse navbar-collapse">
                  <div className="mb-6 w-100">
                    <div className="pb-4 mb-2">
                      <div className="sidebar border rounded">
                        <div className="p-4">
                          {/* Input */}
                          <span className="d-block text-gray-1  font-weight-normal mb-0 text-left">
                            Destination or Hotel Name
                          </span>
                          <div className="mb-4">
                            <div className="input-group border-bottom border-width-2 border-color-1">
                              <i className="flaticon-pin-1 d-flex align-items-center mr-2 text-primary font-weight-semi-bold font-size-22" />
                              <input
                                type="text"
                                className="form-control font-size-lg-14 shadow-none hero-form font-weight-bold border-0 p-0"
                                placeholder="Where are you going?"
                                aria-label="Where are you going?"
                                aria-describedby="keywordInputAddon"
                              />
                            </div>
                          </div>
                          {/* End Input */}
                          {/* Input */}
                          <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">
                            Check In - Out
                          </span>
                          <div className="mb-4">
                            <div className="border-bottom border-width-2 border-color-1">
                              <div
                                id="datepickerWrapperPick"
                                className="u-datepicker input-group"
                              >
                                <div className="input-group-prepend">
                                  <span className="d-flex align-items-center mr-2 font-size-21">
                                    <i className="flaticon-calendar text-primary font-weight-semi-bold" />
                                  </span>
                                </div>
                                <input
                                  className="js-range-datepicker font-size-16 ml-1 shadow-none font-weight-bold form-control hero-form bg-transparent border-0 flatpickr-input p-0"
                                  type="text"
                                  placeholder="July 7/2019"
                                  aria-label="July 7/2019"
                                  data-rp-wrapper="#datepickerWrapperPick"
                                  data-rp-type="range"
                                  data-rp-date-format="M d / Y"
                                  data-rp-default-date='[" jul 7 2020", "aug 25 2020"]'
                                />
                              </div>
                              {/* End Datepicker */}
                            </div>
                          </div>
                          {/* End Input */}
                          {/* Input */}
                          <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">
                            Guests
                          </span>
                          <div className="mb-4 position-relative">
                            <div className="border-bottom border-width-2 border-color-1">
                              <a
                                id="basicDropdownClickInvoker"
                                className="dropdown-nav-link dropdown-toggle flex-horizontal-center pt-3 pb-2"
                                href="#"
                                role="button"
                                aria-controls="basicDropdownClick"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-unfold-event="click"
                                data-unfold-target="#basicDropdownClick"
                                data-unfold-type="css-animation"
                                data-unfold-duration={300}
                                data-unfold-delay={300}
                                data-unfold-hide-on-scroll="true"
                                data-unfold-animation-in="slideInUp"
                                data-unfold-animation-out="fadeOut"
                              >
                                <i className="flaticon-add-group d-flex align-items-center mr-3 font-size-20 text-primary font-weight-semi-bold" />
                                <span className="text-black font-size-16 font-weight-semi-bold mr-auto">
                                  2 Rooms - 3 Guests
                                </span>
                              </a>
                              <div
                                id="basicDropdownClick"
                                className="dropdown-menu dropdown-unfold col m-0"
                                aria-labelledby="basicDropdownClickInvoker"
                              >
                                <div className="w-100 py-2 px-3 mb-3">
                                  <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                    <span className="d-block font-size-16 text-secondary font-weight-medium">
                                      Rooms
                                    </span>
                                    <div className="d-flex">
                                      <a
                                        className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                                        href="#"
                                      >
                                        <small className="fas fa-minus btn-icon__inner" />
                                      </a>
                                      <input
                                        className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center"
                                        type="text"
                                        defaultValue={1}
                                      />
                                      <a
                                        className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                                        href="#"
                                      >
                                        <small className="fas fa-plus btn-icon__inner" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100 py-2 px-3 mb-3">
                                  <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                    <span className="d-block font-size-16 text-secondary font-weight-medium">
                                      Adults
                                    </span>
                                    <div className="d-flex">
                                      <a
                                        className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                                        href="#"
                                      >
                                        <small className="fas fa-minus btn-icon__inner" />
                                      </a>
                                      <input
                                        className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center"
                                        type="text"
                                        defaultValue={1}
                                      />
                                      <a
                                        className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                                        href="#"
                                      >
                                        <small className="fas fa-plus btn-icon__inner" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100 py-2 px-3">
                                  <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                    <span className="d-block font-size-16 text-secondary font-weight-medium">
                                      Child
                                    </span>
                                    <div className="d-flex">
                                      <a
                                        className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                                        href="#"
                                      >
                                        <small className="fas fa-minus btn-icon__inner" />
                                      </a>
                                      <input
                                        className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center"
                                        type="text"
                                        defaultValue={1}
                                      />
                                      <a
                                        className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle"
                                        href="#"
                                      >
                                        <small className="fas fa-plus btn-icon__inner" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100 text-right py-1 pr-5">
                                  <a
                                    className="text-primary font-weight-semi-bold font-size-16"
                                    href="#"
                                  >
                                    Done
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Input */}
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary height-60 w-100 font-weight-bold mb-xl-0 mb-lg-1 transition-3d-hover"
                            >
                              <i className="flaticon-magnifying-glass mr-2" />
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-9 order-md-1 order-lg-2 pb-5 pb-lg-0">
              {/* Slick Tab carousel */}
              <div className="u-slick__tab">
                {/* Tab Content */}
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade mb-5 mb-xl-0"
                    id="pills-three-example1"
                    role="tabpanel"
                    aria-labelledby="pills-three-example1-tab"
                    data-target-group="groups"
                  >
                    <ul className="d-block list-unstyled products-group prodcut-list-view">
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          alt="Description"
                                          src="images/img17.jpg"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v1.html">
                                  <span className="font-weight-bold font-size-17 text-dark text-dark">
                                    Comfortable Office Space
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img17.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v1.html">
                                  <span className="font-weight-bold font-size-17 text-dark">
                                    Sunny, Modern room in Village!
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img17.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v1.html">
                                  <span className="font-weight-bold font-size-17 text-dark">
                                    {" "}
                                    Large And Modern Bedroom
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img17.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img17.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v1.html">
                                  <span className="font-weight-bold font-size-17 text-dark text-dark">
                                    Large And Modern Bedroom
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img17.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v1.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v1.html">
                                  <span className="font-weight-bold font-size-17 text-dark">
                                    Modern Apartment With Ocean View
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img17.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v2.html">
                                  <span className="font-weight-bold font-size-17 text-dark">
                                    Large And Modern Bedroom
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v2.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img17.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v2.html">
                                  <span className="font-weight-bold font-size-17 text-dark">
                                    City Penthouse In Central City
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v2.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                          alt="Description"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v2.html">
                                  <span className="font-weight-bold font-size-17 text-dark text-dark">
                                    Large And Modern Bedroom
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v2.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="card mb-5 overflow-hidden">
                        <div className="product-item__outer w-100">
                          <div className="row align-items-center">
                            <div className="col-md-5 col-lg-6 col-xl-4">
                              <div className="product-item__header">
                                <div className="position-relative">
                                  <div
                                    className="js-slick-carousel u-slick u-slick--equal-height "
                                    data-slides-show={1}
                                    data-slides-scroll={1}
                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"
                                  >
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img18.jpg"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img19.jpg"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img20.jpg"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img38.jpg"
                                        />
                                      </a>
                                    </div>
                                    <div className="js-slide">
                                      <a
                                        href="../rental/rental-single-v2.html"
                                        className="d-block gradient-overlay-half-bg-gradient-v5"
                                      >
                                        <img
                                          className="img-fluid"
                                          src="images/img39.jpg"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-7 col-lg-6 col-xl-5 flex-horizontal-center">
                              <div className="w-100 position-relative m-4 m-md-0">
                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon rounded-circle"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Save for later"
                                  >
                                    <span className="flaticon-heart-1 font-size-20" />
                                  </button>
                                </div>
                                <a href="../rental/rental-single-v2.html">
                                  <span className="font-weight-bold font-size-17 text-dark">
                                    Sunny, Modern room in Village!
                                  </span>
                                </a>
                                <div className="card-body p-0 mt-2">
                                  <a
                                    href="../rental/rental-single-v2.html"
                                    className="d-block"
                                  >
                                    <div className="d-flex align-items-center font-size-14 text-gray-1">
                                      <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                      Greater London, United Kingdom
                                    </div>
                                  </a>
                                  <div className="mt-1">
                                    <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                      2.5/5 Excellant
                                    </span>
                                    <span className="font-size-14 text-gray-1 ml-2">
                                      48 reviews
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 py-2">
                                  <div className="d-flex">
                                    <div className="ml-0">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-plans font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4800 sq ft
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bathtub font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            2 bathrooms
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="ml-5">
                                      <ul className="list-unstyled mb-0">
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-door font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            4 Rooms
                                          </div>
                                        </li>
                                        <li className="media mb-2 text-gray-1">
                                          <small className="mr-2">
                                            <small className="flaticon-bed-1 font-size-16" />
                                          </small>
                                          <div className="media-body font-size-1">
                                            6 Beds
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                              <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div className="text-center my-xl-1">
                                  <div className="mb-2 pb-1">
                                    <span className="font-weight-bold font-size-22">
                                      £899.00
                                    </span>
                                    <span className="font-size-14">
                                      {" "}
                                      / night
                                    </span>
                                  </div>
                                  <a
                                    href="../rental/rental-single-v1.html"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center text-md-left font-size-14 mb-3 text-lh-1">
                      Showing 1–15
                    </div>
                  </div>
                  <div
                    className="tab-pane fade mb-5 mb-xl-0 show active"
                    id="pills-one-example1"
                    role="tabpanel"
                    aria-labelledby="pills-one-example1-tab"
                    data-target-group="groups"
                  >
                    <div className="row">
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img17.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v1.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    Comfortable Office Space
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 left-0 pt-5 pl-3">
                            <a href="../rental/rental-single-v1.html">
                              <span className="badge badge-pill bg-white text-primary px-3 py-2 font-size-14 font-weight-normal">
                                Featured
                              </span>
                            </a>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                Greater London, United Kingdom
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img18.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v1.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    Sunny, Modern room in Village!
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                Istanbul, Turkey
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img19.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v1.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    {" "}
                                    Office Space in Downey{" "}
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                New York, United States
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img20.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <h6 className="text-white font-weight-bold font-size-17">
                                  <a href="../rental/rental-single-v1.html">
                                    Apartment in Wellington
                                  </a>
                                </h6>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                New South Wales, Australia
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img38.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v1.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    Sunny, Modern room in Village!
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v1.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                New South Wales, Australia
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img39.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v2.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    {" "}
                                    Office Space in Downey{" "}
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                New York, United States
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img40.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v2.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    {" "}
                                    Apartment in Wellington
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 left-0 pt-5 pl-3">
                            <a href="../rental/rental-single-v2.html">
                              <span className="badge badge-pill bg-white text-primary px-3 py-2 font-size-14 font-weight-normal">
                                Featured
                              </span>
                            </a>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                Istanbul , Turkey
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img41.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v2.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    {" "}
                                    Office Space in Downey{" "}
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                Istanbul , Turkey
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1">
                        <div className="card transition-3d-hover shadow-hover-2">
                          <div className="position-relative">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block gradient-overlay-half-bg-gradient-v5"
                            >
                              <img
                                className="card-img-top"
                                src="images/img42.jpg"
                              />
                            </a>
                            <div className="position-absolute top-0 right-0 pt-5 pr-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon text-white rounded-circle"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Save for later"
                              >
                                <span className="flaticon-heart-1 font-size-20" />
                              </button>
                            </div>
                            <div className="position-absolute bottom-0 left-0 right-0">
                              <div className="px-3 pb-2">
                                <a href="../rental/rental-single-v2.html">
                                  <span className="text-white font-weight-bold font-size-17">
                                    Apartment in Wellington
                                  </span>
                                </a>
                                <div className="text-white my-2">
                                  <span className="mr-1 font-size-14">
                                    From
                                  </span>
                                  <span className="font-weight-bold font-size-19">
                                    £350.00
                                  </span>
                                  <span className="mr-1 font-size-14">
                                    / night
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-4 py-3 border-bottom">
                            <a
                              href="../rental/rental-single-v2.html"
                              className="d-block"
                            >
                              <div className="d-flex align-items-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                Istanbul , Turkey
                              </div>
                            </a>
                            <div className="mt-1">
                              <span className="py-1 font-size-14 border-radius-3 font-weight-normal pagination-v2-arrow-color">
                                2.5/5 Excellant
                              </span>
                              <span className="font-size-14 text-gray-1 ml-2">
                                48 reviews
                              </span>
                            </div>
                          </div>
                          <div className="px-4 pt-3 pb-2">
                            <div className="row">
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-plans font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4800 sq ft
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bathtub font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      2 bathrooms
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-door font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      4 Rooms
                                    </div>
                                  </li>
                                  <li className="media mb-2 text-gray-1 align-items-center">
                                    <small className="mr-2">
                                      <small className="flaticon-bed-1 font-size-16" />
                                    </small>
                                    <div className="media-body font-size-1">
                                      6 Beds
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-md-left font-size-14 mb-3 text-lh-1">
                      Showing 1–15
                    </div>
                  </div>
                </div>
                {/* End Tab Content */}
              </div>
              {/* Slick Tab carousel */}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
