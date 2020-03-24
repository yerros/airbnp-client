/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";

export default function Category() {
  return (
    <div>
      <div
        className="hero-block hero-v6 bg-img-hero-bottom gradient-overlay-half-bg-charcoal-gray text-center z-index-2"
        style={{ backgroundImage: "url(images/img3_1.jpg)" }}
      >
        <div className="container space-2 space-top-xl-6">
          <div className="justify-content-md-center py-xl-10">
            <div className="pb-lg-11 mb-7">
              <h1 className="font-size-60 font-size-xs-30 text-white font-weight-bold">
                Find your next rental
              </h1>
              <p className="font-size-20 font-weight-normal text-white">
                Book experiences you’ll want to tell the world about
              </p>
            </div>
          </div>
          <div className="mb-lg-n16">
            <div className="card border-0 tab-shadow">
              <div className="card-body">
                <form className="js-validate">
                  <div className="row d-block nav-select d-lg-flex mb-lg-3 px-2 px-lg-3">
                    <div className="col-sm-12 col-lg-3dot6 col-xl-3dot7 mb-4 mb-lg-0 ">
                      <span className="d-block text-gray-1 font-weight-normal text-left mb-0">
                        Destination or Hotel Name
                      </span>
                      <select
                        className="js-select selectpicker dropdown-select tab-dropdown col-12 pl-0 flaticon-pin-1 d-flex align-items-center text-primary font-weight-semi-bold"
                        title="Where are you going?"
                        data-style
                        data-live-search="true"
                        data-searchbox-classes="input-group-sm"
                      ></select>
                    </div>
                    <div className="col-sm-12 col-lg-3dot7 col-xl-3dot6 mb-4 mb-lg-0 ">
                      <span className="d-block text-gray-1 text-left font-weight-normal mb-0">
                        Check In - Out
                      </span>
                      <div className="border-bottom border-width-2 border-color-1">
                        <div
                          id="datepickerWrapperFromOne"
                          className="u-datepicker input-group"
                        >
                          <div className="input-group-prepend">
                            <span className="d-flex align-items-center mr-2">
                              <i className="flaticon-calendar text-primary font-weight-semi-bold" />
                            </span>
                          </div>
                          <input
                            className="js-range-datepicker font-size-lg-16 shadow-none font-weight-bold form-control hero-form bg-transparent  border-0"
                            type="date"
                            data-rp-wrapper="#datepickerWrapperFromOne"
                            data-rp-type="range"
                            data-rp-date-format="M d / Y"
                            data-rp-default-date='["Jul 7 / 2020", "Aug 25 / 2020"]'
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-2dot8 mb-4 mb-lg-0 dropdown-custom">
                      <span className="d-block text-gray-1 text-left font-weight-normal mb-0">
                        Guests
                      </span>
                      <a
                        id="basicDropdownClickInvoker"
                        className="dropdown-nav-link dropdown-toggle d-flex pt-3 pb-2"
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
                        <i className="flaticon-plus d-flex align-items-center mr-3 font-size-18 text-primary font-weight-semi-bold" />
                        <span className="text-black font-size-16 font-weight-semi-bold">
                          1 Adult - 0 Child
                        </span>
                      </a>
                      <div
                        id="basicDropdownClick"
                        className="dropdown-menu dropdown-unfold col-11 m-0"
                        aria-labelledby="basicDropdownClickInvoker"
                      >
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
                      {/* End Input */}
                    </div>
                    <div className="col-sm-12 col-lg-1dot8 align-self-lg-end text-md-right">
                      <button
                        type="submit"
                        className="btn btn-primary btn-md border-radius-3 mb-xl-0 mb-lg-1 transition-3d-hover mr-5"
                      >
                        <i className="flaticon-magnifying-glass font-size-20 mr-2" />
                        Search
                      </button>
                    </div>
                  </div>
                  {/* End Checkbox */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-block category-v1 bg-gray-2">
        <div className="container space-2">
          <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-lg-10">
            <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
              Find a Home Type
            </h2>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 col-xl-3">
              <div className="rounded-xs mb-5 mb-xl-0">
                <a className="d-block" href="../rental/rental-list.html">
                  <div
                    className="bg-img-hero gradient-overlay-half-bg-white transition-3d-hover shadow-hover-2 max-height-200"
                    style={{ backgroundImage: "url(images/img1.jpg)" }}
                  >
                    <div className="text-center py-5">
                      <i className="flaticon-house-1 font-size-50 text-red-lighter-1" />
                      <h6 className="font-size-17 font-weight-bold text-gray-3 mt-2">
                        Modern Villa
                      </h6>
                      <span className="font-size-14 font-weight-normal text-gray-1">
                        07 Listings
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="rounded-xs mb-5 mb-xl-0">
                <a className="d-block" href="../rental/rental-list.html">
                  <div
                    className="bg-img-hero gradient-overlay-half-bg-white transition-3d-hover shadow-hover-2 max-height-200"
                    style={{ backgroundImage: "url(images/img1.jpg)" }}
                  >
                    <div className="text-center py-5">
                      <i className="flaticon-house font-size-50 text-red-lighter-1" />
                      <h6 className="font-size-17 font-weight-bold text-gray-3 mt-2">
                        Family House
                      </h6>
                      <span className="font-size-14 font-weight-normal text-gray-1">
                        58 Listings
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="rounded-xs mb-5 mb-xl-0">
                <a className="d-block" href="../rental/rental-list.html">
                  <div
                    className="bg-img-hero gradient-overlay-half-bg-white transition-3d-hover shadow-hover-2 max-height-200"
                    style={{ backgroundImage: "url(images/img1.jpg)" }}
                  >
                    <div className="text-center py-5">
                      <i className="flaticon-modern-house font-size-50 text-red-lighter-1" />
                      <h6 className="font-size-17 font-weight-bold text-gray-3 mt-2">
                        Town House
                      </h6>
                      <span className="font-size-14 font-weight-normal text-gray-1">
                        07 Listings
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="rounded-xs">
                <a className="d-block" href="../rental/rental-list.html">
                  <div
                    className="bg-img-hero gradient-overlay-half-bg-white transition-3d-hover shadow-hover-2 max-height-200"
                    style={{ backgroundImage: "url(images/img1.jpg)" }}
                  >
                    <div className="text-center py-5">
                      <i className="flaticon-apartment font-size-50 text-red-lighter-1" />
                      <h6 className="font-size-17 font-weight-bold text-gray-3 mt-2">
                        Apartment
                      </h6>
                      <span className="font-size-14 font-weight-normal text-gray-1">
                        07 Listings
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
