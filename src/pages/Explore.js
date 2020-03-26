/* eslint jsx-a11y/anchor-is-valid: 0, jsx-a11y/alt-text:0 */
import React, { Component } from "react";
import Layout from "../component/Layout";
import { Get, formatRupiah } from "../config";
import { Link } from "react-router-dom";

export default class Explore extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      categories: []
    };
  }

  componentDidMount() {
    this.getProperty();
    this.getCategory();
  }

  getProperty() {
    Get("property").then(res => {
      this.setState({ properties: res });
    });
  }

  getCategory() {
    Get("category").then(res => {
      this.setState({ categories: res });
    });
  }

  filterAddress = e => {
    Get(`property/search/query?q=${e.target.value}`).then(res => {
      this.setState({ properties: res });
    });
  };

  filterCategory = e => {
    Get(`property/search/query?category=${e.target.value}`).then(res => {
      this.setState({ properties: res });
    });
  };

  filterPrice = e => {
    Get(`property/search/query?price=${e.target.value}`).then(res => {
      this.setState({ properties: res });
    });
  };

  filter;
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
                                onChange={this.filterAddress}
                              />
                            </div>
                          </div>
                          {/* End Input */}
                          {/* Input */}
                          <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">
                            Room Type
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
                                <div>
                                  <select
                                    onChange={this.filterCategory}
                                    className="form-control font-size-lg-14 shadow-none hero-form font-weight-bold border-0 p-0"
                                    name="rcrs-country"
                                  >
                                    <option value="">Select Room Type</option>
                                    {this.state.categories.map((item, i) => {
                                      return (
                                        <option value={item._id} key={i}>
                                          {item.category_name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                              {/* End Datepicker */}
                            </div>
                          </div>
                          {/* End Input */}
                          {/* Input */}
                          <span className="d-block text-gray-1  font-weight-normal mb-0 text-left">
                            Price
                          </span>
                          <div className="mb-4">
                            <div className="input-group border-bottom border-width-2 border-color-1">
                              <i className="flaticon-non-commercial d-flex align-items-center mr-2 text-primary font-weight-semi-bold font-size-22" />
                              <input
                                type="text"
                                className="form-control font-size-lg-14 shadow-none hero-form font-weight-bold border-0 p-0"
                                placeholder="Enter Max Price"
                                onChange={this.filterPrice}
                              />
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
                    className="tab-pane fade mb-5 mb-xl-0 show active"
                    id="pills-one-example1"
                    role="tabpanel"
                    aria-labelledby="pills-one-example1-tab"
                    data-target-group="groups"
                  >
                    <div className="row">
                      {this.state.properties.map((item, i) => {
                        return (
                          <div
                            className="col-md-6 col-xl-4 mb-3 mb-md-4 pb-1"
                            key={i}
                          >
                            <div className="card transition-3d-hover shadow-hover-2">
                              <div className="position-relative">
                                <Link
                                  to={`/details/${item._id}`}
                                  className="d-block gradient-overlay-half-bg-gradient-v5"
                                >
                                  <img
                                    className="card-img-top"
                                    src={item.images}
                                  />
                                </Link>
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
                                    <Link to={`/details/${item._id}`}>
                                      <span className="text-white font-weight-bold font-size-17">
                                        {item.title}
                                      </span>
                                    </Link>
                                    <div className="text-white my-2">
                                      <span className="mr-1 font-size-14">
                                        From
                                      </span>
                                      <span className="font-weight-bold font-size-19">
                                        Rp. {formatRupiah(item.price)}
                                      </span>
                                      <span className="mr-1 font-size-14">
                                        / night
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="position-absolute top-0 left-0 pt-5 pl-3">
                                <Link to={`/details/${item._id}`}>
                                  <span className="badge badge-pill bg-white text-primary px-3 py-2 font-size-14 font-weight-normal">
                                    {item.category.category_name}
                                  </span>
                                </Link>
                              </div>
                              <div className="card-body px-4 py-3 border-bottom">
                                <Link
                                  to={`/details/${item._id}`}
                                  className="d-block"
                                >
                                  <div className="d-flex align-items-center font-size-14 text-gray-1">
                                    <i className="icon flaticon-placeholder mr-2 font-size-20" />{" "}
                                    {item.address}
                                  </div>
                                </Link>
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
                                          {item.large} sq ft
                                        </div>
                                      </li>
                                      <li className="media mb-2 text-gray-1 align-items-center">
                                        <small className="mr-2">
                                          <small className="flaticon-bathtub font-size-16" />
                                        </small>
                                        <div className="media-body font-size-1">
                                          {item.room} bathrooms
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
                                          {item.room} Rooms
                                        </div>
                                      </li>
                                      <li className="media mb-2 text-gray-1 align-items-center">
                                        <small className="mr-2">
                                          <small className="flaticon-bed-1 font-size-16" />
                                        </small>
                                        <div className="media-body font-size-1">
                                          {item.bed} Beds
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
