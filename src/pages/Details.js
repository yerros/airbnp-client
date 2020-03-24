/* eslint jsx-a11y/anchor-is-valid: 0, jsx-a11y/img-redundant-alt: 0,jsx-a11y/heading-has-content:0 */
import React, { Component } from "react";
import Layout from "../component/Layout";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import moment from "moment";
import ProductList from "../component/ProductList";
import Map from "../component/Map";
import { addCart, SetDuration, SetDate, setAlert } from "../actions";
import { Get, formatRupiah, Post } from "../config";
import "react-datepicker/dist/react-datepicker.css";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      product: "",
      lat: "",
      lng: "",
      startDate: new Date(),
      endDate: new Date(),
      maps: { lat: 0, lng: 0 },
      duration: 0
    };
  }
  componentDidMount() {
    this.getSingleProduct();
  }
  getSingleProduct() {
    Get(`property/${this.props.match.params.id}`).then(res => {
      this.setState({ product: res, maps: res.maps, isLoading: false });
    });
  }

  addToCart = () => {
    const duration = this.checkDuration();
    if (duration < 1) {
      return this.props.sendAlert("You must select date to continue", "error");
    }
    const date = { in: this.state.startDate, out: this.state.endDate };
    const item = this.state.product;
    this.props.sendCart({ item, date, duration });
    this.props.history.push("/checkout");
  };

  checkDuration = () => {
    const { startDate, endDate } = this.state;
    const start = moment(startDate, "YYYY-MM-DD");
    const end = moment(endDate, "YYYY-MM-DD");
    const setDuration = moment.duration(start.diff(end)).asDays();
    const duration = Math.abs(Math.floor(setDuration));
    console.log(duration);
    return duration;
  };

  sendFavorite = () => {
    const data = {
      property: this.state.product._id
    };
    Post("favorite", data).then(res => {
      this.props.sendAlert(res, "success");
    });
  };
  addFavorite = () => {
    this.props.isLogin
      ? this.sendFavorite()
      : this.props.sendAlert("You must select date to continue", "error");
  };
  render() {
    const {
      title,
      description,
      address,
      images,
      large,
      room,
      bed,
      price
    } = this.state.product;
    return (
      <Layout header={1}>
        {this.state.isLoading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            {/* Breadcrumb */}
            <div className="border-bottom mb-7">
              <div className="container">
                <nav className="py-3" aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-no-gutter mb-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                    <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                      <a href="#">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
                      aria-current="page"
                    >
                      {title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* End Breadcrumb */}
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-xl-9">
                  <div className="d-block d-md-flex flex-center-between align-items-start mb-3">
                    <div className="mb-3">
                      <div className="d-block d-md-flex flex-horizontal-center mb-2 mb-md-0">
                        <h4 className="font-size-23 font-weight-bold mb-1 mr-3">
                          {title}
                        </h4>
                      </div>
                      <div className="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1">
                        <i className="icon flaticon-placeholder mr-2 font-size-20" />
                        {address}
                      </div>
                    </div>
                    <ul className="list-group list-group-borderless list-group-horizontal custom-social-share">
                      <li className="list-group-item px-1">
                        <a
                          role="button"
                          type="button"
                          onClick={this.addFavorite}
                          className="height-45 width-45 border rounded border-width-2 flex-content-center"
                        >
                          <i className="flaticon-like font-size-18 text-dark" />
                        </a>
                      </li>
                      <li className="list-group-item px-1">
                        <a
                          href="#"
                          className="height-45 width-45 border rounded border-width-2 flex-content-center"
                        >
                          <i className="flaticon-share font-size-18 text-dark" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="py-4 border-top mb-4">
                    <ul className="mb-4 list-group list-group-borderless list-group-horizontal flex-center-between text-center flex-wrap">
                      <li className="list-group-item text-lh-sm ">
                        <i className="flaticon-plans text-primary font-size-50 mb-1 d-block" />
                        <div className="text-gray-1">{large} sq ft</div>
                      </li>
                      <li className="list-group-item text-lh-sm ">
                        <i className="flaticon-door text-primary font-size-50 mb-1 d-block" />
                        <div className="text-gray-1">{room} rooms</div>
                      </li>
                      <li className="list-group-item text-lh-sm ">
                        <i className="flaticon-bathtub text-primary font-size-50 mb-1 d-block" />
                        <div className="text-gray-1">{room} bathrooms</div>
                      </li>
                      <li className="list-group-item text-lh-sm ">
                        <i className="flaticon-bed-1 text-primary font-size-50 mb-1 d-block" />
                        <div className="text-gray-1">{bed} beds</div>
                      </li>
                    </ul>
                    <div className="position-relative">
                      {/* Images Carousel */}
                      <div className="js-slide">
                        <img
                          className="img-fluid border-radius-3"
                          src={images}
                          alt="Description"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="stickyBlockStartPoint" className="mb-4">
                    <div
                      className="border rounded-pill js-sticky-block p-1 border-width-2 z-index-4 bg-white"
                      data-parent="#stickyBlockStartPoint"
                      data-offset-target="#logoAndNav"
                      data-sticky-view="lg"
                      data-start-point="#stickyBlockStartPoint"
                      data-end-point="#stickyBlockEndPoint"
                      data-offset-top={30}
                      data-offset-bottom={30}
                    >
                      <ul className="js-scroll-nav nav tab-nav-pill flex-nowrap tab-nav">
                        <li className="nav-item">
                          <a
                            className="nav-link font-weight-medium"
                            href="#scroll-description"
                          >
                            <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                              <span className="tabtext font-weight-semi-bold">
                                Description
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-bottom position-relative">
                    <h5
                      id="scroll-description"
                      className="font-size-21 font-weight-bold text-dark"
                    >
                      Description
                    </h5>
                    <p>{description}</p>
                  </div>
                  <div className="border-bottom py-4">
                    <h5
                      id="scroll-location"
                      className="font-size-21 font-weight-bold text-dark mb-4"
                    ></h5>
                    {/* for google map */}
                    <div className="col-md-12 mb-2">
                      <Map
                        center={{
                          lat: this.state.maps.lat,
                          lng: this.state.maps.lng
                        }}
                        zoom={11}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                  <div className="mb-4">
                    <div className="border border-color-7 rounded mb-5">
                      <div className="border-bottom">
                        <div className="p-4">
                          <span className="font-size-14">From</span>
                          <span className="font-size-24 text-gray-6 font-weight-bold ml-1">
                            Rp. {formatRupiah(price)}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">
                          Check In - Out
                        </span>
                        <div className="mb-4">
                          <div className="border-bottom border-width-2 border-color-1">
                            <div className="input-group-prepend">
                              <span className="d-flex align-items-center mr-2 font-size-21">
                                <i className="flaticon-calendar text-primary font-weight-semi-bold" />
                              </span>
                            </div>
                            <DatePicker
                              className="font-size-16 ml-1 shadow-none font-weight-bold form-control hero-form bg-transparent border-0 p-0"
                              selected={this.state.endDate}
                              required
                              startDate={this.state.startDate}
                              onChange={date =>
                                this.setState({ endDate: date })
                              }
                              endDate={this.state.endDate}
                              minDate={this.state.startDate}
                              placeholderText="Select a date between today and 5 days in the future"
                            />
                            {/* End Datepicker */}
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-center">
                          <button
                            type={"button"}
                            onClick={this.addToCart}
                            className="btn btn-primary d-flex align-items-center justify-content-center height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border border-color-7 rounded p-4 mb-5">
                      <h6 className="font-size-17 font-weight-bold text-gray-3 mx-1 mb-3 pb-1">
                        Why Book With Us?
                      </h6>
                      <div className="d-flex align-items-center mb-3">
                        <i className="flaticon-star font-size-25 text-primary mr-3 pr-1" />
                        <h6 className="mb-0 font-size-14 text-gray-1">
                          <a href="#">No-hassle best price guarantee</a>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="flaticon-support font-size-25 text-primary mr-3 pr-1" />
                        <h6 className="mb-0 font-size-14 text-gray-1">
                          <a href="#">Customer care available 24/7</a>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="flaticon-favorites-button font-size-25 text-primary mr-3 pr-1" />
                        <h6 className="mb-0 font-size-14 text-gray-1">
                          <a href="#">Hand-picked Tours &amp; Activities</a>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center mb-0">
                        <i className="flaticon-airplane font-size-25 text-primary mr-3 pr-1" />
                        <h6 className="mb-0 font-size-14 text-gray-1">
                          <a href="#">Free Travel Insureance</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProductList title="You might also like..." />
            </div>
          </div>
        )}
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.userReducer.isLogin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sendCart: item => dispatch(addCart(item)),
    sendDuration: num => dispatch(SetDuration(num)),
    sendDate: date => dispatch(SetDate(date)),
    sendAlert: (msg, type) => dispatch(setAlert(msg, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
