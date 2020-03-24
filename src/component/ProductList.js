/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import { Link } from "react-router-dom";
import { formatRupiah } from "../config";

export default function ProductList(props) {
  const data = props.data || [];
  return (
    <div className="product-card-carousel-block product-card-carousel-v3">
      <div className="container space-1">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mt-3 mb-5">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
            {props.title}
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {data.map((item, i) => {
              return (
                <div
                  className="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1"
                  key={i}
                >
                  <div className="card transition-3d-hover shadow-hover-2 w-100 h-100">
                    <div className="position-relative">
                      <Link
                        to={`/details/${item._id}`}
                        className="d-block gradient-overlay-half-bg-gradient-v5"
                      >
                        <img
                          className="card-img-top"
                          src={item.images}
                          alt="description"
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
                            <span className="mr-1 font-size-14">From</span>
                            <span className="font-weight-bold font-size-19">
                              Rp. {formatRupiah(item.price)}
                            </span>
                            <span className="font-size-14"> / night</span>
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
                      <Link to={`/details/${item._id}`} className="d-block">
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
                                {item.room} Bathrooms
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
    </div>
  );
}
