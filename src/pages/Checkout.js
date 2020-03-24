/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from "react";
import moment from "moment";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Layout from "../component/Layout";
import { Post, formatRupiah } from "../config";
import { setAlert } from "../actions";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_info: true,
      user: props.user,
      payment_info: false,
      confirm: false,
      country: "Indonesia",
      city: "",
      phone: "",
      payment_method: "midtrans",
      order_result: ""
    };
  }

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  continue = () => {
    if (this.props.login === false) {
      return this.props.sendAlert("You must select date to continue", "error");
    }
    this.setState({
      customer_info: !this.state.customer_info,
      payment_info: !this.state.payment_info
    });
  };

  submitOrder = e => {
    e.preventDefault();
    const items = this.props.cart[0];
    const data = {
      property: items.item._id,
      guest: this.state.user._id,
      amount: items.item.price * items.duration,
      booking_date: items.date,
      payment_method: this.state.payment_method,
      billing: {
        firstname: this.state.user.firstname,
        lastname: this.state.user.lastname,
        city: this.state.city,
        country: this.state.country,
        phone: this.state.phone
      }
    };
    Post("order", data).then(res => {
      this.props.history.push(`/invoice/${res._id}`);
    });
  };
  render() {
    const {
      customer_info,
      payment_info,
      confirm,
      country,
      city,
      user,
      phone,
      payment_method
    } = this.state;
    if (this.props.cart[0] === undefined) {
      return <Redirect to="/" />;
    }
    const { title, address, price } = this.props.cart[0].item;
    const total = this.props.cart[0];
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9 mt-5">
              {customer_info ? (
                <div className="mb-5 shadow-soft bg-white rounded-sm">
                  <div className="py-3 px-4 px-xl-12 border-bottom">
                    <ul className="list-group flex-nowrap overflow-auto overflow-md-visble list-group-horizontal list-group-borderless flex-center-between pt-1">
                      <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 bg-primary border-width-2 border border-primary text-white mx-auto rounded-circle">
                          1
                        </div>
                        <div className="text-primary">Customer information</div>
                      </li>
                      <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                          2
                        </div>
                        <div className="text-gray-1">Payment information</div>
                      </li>
                      <li className="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                          3
                        </div>
                        <div className="text-gray-1">Booking is confirmed!</div>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    <h5
                      id="scroll-description"
                      className="font-size-21 font-weight-bold text-dark mb-4"
                    >
                      Let us know who you are
                    </h5>
                    <form className="js-validate">
                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <div className="js-form-message">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              data-msg="Please enter your first name."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                              value={user.firstname}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <div className="js-form-message">
                            <label className="form-label">Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastname"
                              data-msg="Please enter your last name."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                              value={user.lastname}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <div className="js-form-message">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                              value={user.email}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <div className="js-form-message">
                            <label className="form-label">Phone</label>
                            <input
                              type="number"
                              className="form-control"
                              name="phone"
                              required
                              data-msg="Please enter a valid phone number."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                              value={phone}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="w-100" />

                        <div className="col-sm-6 mb-4">
                          <div className="js-form-message">
                            <label className="form-label">Country</label>
                            <CountryDropdown
                              className="form-control"
                              value={country}
                              onChange={e => this.setState({ country: e })}
                              priorityOptions={["ID", "US", "GB"]}
                            />
                          </div>
                        </div>

                        <div className="col-sm-6 mb-4">
                          <div className="js-form-message">
                            <label className="form-label">City</label>
                            <RegionDropdown
                              className="form-control"
                              country={country}
                              value={city}
                              onChange={val => this.setState({ city: val })}
                            />
                          </div>
                        </div>

                        <div className="w-100" />
                        <div className="col-sm-6 align-self-end">
                          <div className="text-right">
                            <button
                              onClick={this.continue}
                              type="submit"
                              className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                            >
                              NEXT PAGE
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {payment_info ? (
                <div className="mb-5 shadow-soft bg-white rounded-sm">
                  <div className="py-3 px-4 px-xl-12 border-bottom">
                    <ul className="list-group flex-nowrap overflow-auto overflow-md-visble list-group-horizontal list-group-borderless flex-center-between pt-1">
                      <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                          1
                        </div>
                        <div className="text-gray-1">Customer information</div>
                      </li>
                      <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 bg-primary border-width-2 border border-primary text-white mx-auto rounded-circle">
                          2
                        </div>
                        <div className="text-primary">Payment information</div>
                      </li>
                      <li className="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                          3
                        </div>
                        <div className="text-gray-1">Booking is confirmed!</div>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    <h5
                      id="scroll-description"
                      className="font-size-21 font-weight-bold text-dark mb-4"
                    >
                      Your Card Information
                    </h5>
                    {/* Nav Classic */}
                    <ul
                      className="nav nav-classic nav-choose border-0 nav-justified border mx-n3"
                      role="tablist"
                    >
                      <li className="nav-item mx-3 mb-4 mb-md-0">
                        <button
                          className="rounded py-5 border-width-2 border nav-link font-weight-medium active"
                          id="pills-one-example2-tab"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="pills-one-example2"
                          aria-selected="true"
                          value={payment_method}
                          onClick={() =>
                            this.setState({ payment_method: "midtrans" })
                          }
                        >
                          <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                            <i className="flaticon-tick text-white font-size-15" />
                          </div>
                          <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                            <img
                              className="img-fluid mb-3"
                              src="images/img1_7.jpg"
                              alt="Description"
                            />
                            <div className="w-100 text-dark">
                              Payment with MidTrans
                            </div>
                          </div>
                        </button>
                      </li>
                      <li className="nav-item mx-3">
                        <button
                          className="rounded py-5 border-width-2 border nav-link font-weight-medium"
                          id="pills-two-example2-tab"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="pills-two-example2"
                          aria-selected="false"
                          value={payment_method}
                          onClick={() =>
                            this.setState({ payment_method: "paypal" })
                          }
                        >
                          <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                            <i className="flaticon-tick text-white font-size-15" />
                          </div>
                          <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                            <img
                              className="img-fluid mb-3"
                              src="images/img2_5.jpg"
                              alt="Description"
                            />
                            <div className="w-100 text-dark">
                              Payment with paypal
                            </div>
                          </div>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade pt-8 show active"
                        id="pills-one-example2"
                        role="tabpanel"
                        aria-labelledby="pills-one-example2-tab"
                      >
                        {/* Payment Form */}
                        <form
                          onSubmit={this.submitOrder}
                          className="js-validate"
                        >
                          <div className="row">
                            <div className="w-100" />
                            <div className="col">
                              <button
                                onClick={this.submitOrder}
                                type="submit"
                                className="btn btn-primary w-100 rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                              >
                                CONFIRM BOOKING
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade pt-8"
                        id="pills-two-example2"
                        role="tabpanel"
                        aria-labelledby="pills-two-example2-tab"
                      >
                        <form
                          onSubmit={this.submitOrder}
                          className="js-validate"
                        >
                          {/* Login */}
                          <div id="login" data-target-group="idForm">
                            <div className="mb-2">
                              <button
                                onClick={this.submitOrder}
                                type="submit"
                                className="btn btn-block btn-primary transition-3d-hover"
                              >
                                CONFIRM BOOKING
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* End Tab Content */}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {confirm ? (
                <div className="mb-5 shadow-soft bg-white rounded-sm">
                  <div className="py-6 px-5 border-bottom">
                    <div className="flex-horizontal-center">
                      <div className="height-50 width-50 flex-shrink-0 flex-content-center bg-primary rounded-circle">
                        <i className="flaticon-tick text-white font-size-24" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-size-18 font-weight-bold text-dark mb-0 text-lh-sm">
                          Thank You. Your Booking Order is Confirmed Now.
                        </h3>
                        <p className="mb-0">
                          A confirmation email has been sent to your provided
                          email address.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5 border-bottom">
                    <h5
                      id="scroll-description"
                      className="font-size-21 font-weight-bold text-dark mb-2"
                    >
                      Traveler Information
                    </h5>
                    {/* Fact List */}
                    <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">
                          Booking number
                        </span>
                        <span className="text-secondary text-right">
                          5784-BD245
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">First name</span>
                        <span className="text-secondary text-right">
                          Jessica
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Last name</span>
                        <span className="text-secondary text-right">Brown</span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">
                          E-mail address
                        </span>
                        <span className="text-secondary text-right">
                          Info@Jessica.com
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">
                          Street Address and number
                        </span>
                        <span className="text-secondary text-right">
                          353 Third floor Avenue
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Town / City</span>
                        <span className="text-secondary text-right">
                          Paris,France
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">ZIP code</span>
                        <span className="text-secondary text-right">
                          75800-875
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Country</span>
                        <span className="text-secondary text-right">
                          United States of america
                        </span>
                      </li>
                    </ul>
                    {/* End Fact List */}
                  </div>
                  <div className="pt-4 pb-5 px-5 border-bottom">
                    <h5
                      id="scroll-description"
                      className="font-size-21 font-weight-bold text-dark mb-3"
                    >
                      Payment
                    </h5>
                    <p className>
                      Praesent dolor lectus, rutrum sit amet risus vitae,
                      imperdiet cursus neque. Nulla tempor nec lorem eu
                      suscipit. Donec dignissim lectus a nunc molestie
                      consectetur. Nulla eu urna in nisi adipiscing placerat.
                      Nam vel scelerisque magna. Donec justo urna, posuere ut
                      dictum quis.
                    </p>
                    <a href="#" className="text-underline text-primary">
                      Payment is made by Credit Card Via Paypal.
                    </a>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    <h5
                      id="scroll-description"
                      className="font-size-21 font-weight-bold text-dark mb-3"
                    >
                      View Booking Details
                    </h5>
                    <p className>
                      Praesent dolor lectus, rutrum sit amet risus vitae,
                      imperdiet cursus neque. Nulla tempor nec lorem eu
                      suscipit. Donec dignissim lectus a nunc molestie
                      consectetur. Nulla eu urna in nisi adipiscing placerat.
                      Nam vel scelerisque magna. Donec justo urna, posuere ut
                      dictum quis.
                    </p>
                    <a href="#" className="text-underline text-primary">
                      https://www.mytravel.com/booking-details/?=f4acb19f-9542-4a5c-b8ee
                    </a>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="col-lg-4 col-xl-3 mt-5">
              <div className="shadow-soft bg-white rounded-sm">
                <div className="pt-5 pb-3 px-5 border-bottom">
                  <a href="#" className="d-block mb-3">
                    <img
                      className="img-fluid rounded-sm"
                      src="images/img4_1.jpg"
                      alt="Description"
                    />
                  </a>
                  <a
                    href="#"
                    className="text-dark font-weight-bold mb-2 d-block"
                  >
                    {title}
                  </a>
                  <div className="mb-1 flex-horizontal-center text-gray-1">
                    <i className="icon flaticon-pin-1 mr-2 font-size-15" />
                    {address}
                  </div>
                </div>
                {/* Basics Accordion */}
                <div id="basicsAccordion">
                  {/* Card */}
                  <div className="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      className="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingOne"
                    >
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseOne"
                          aria-expanded="true"
                          aria-controls="basicsCollapseOne"
                        >
                          Booking Detail
                          <span className="card-btn-arrow font-size-14 text-dark">
                            <i className="fas fa-chevron-down" />
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseOne"
                      className="collapse show"
                      aria-labelledby="basicsHeadingOne"
                      data-parent="#basicsAccordion"
                    >
                      <div className="card-body px-4 pt-0">
                        {/* Fact List */}
                        <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">
                              Date <br />
                              {moment(this.props.cart[0].date).format(
                                "dddd, MMMM Do YYYY, h:mm:ss a"
                              )}
                            </span>
                          </li>
                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">Night</span>
                            <span className="text-secondary">
                              {this.props.cart[0].duration}
                            </span>
                          </li>
                        </ul>
                        {/* End Fact List */}
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div className="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      className="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingFour"
                    >
                      <h5 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseFour"
                          aria-expanded="false"
                          aria-controls="basicsCollapseFour"
                        >
                          Payment
                          <span className="card-btn-arrow font-size-14 text-dark">
                            <i className="fas fa-chevron-down" />
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseFour"
                      className="collapse show"
                      aria-labelledby="basicsHeadingFour"
                      data-parent="#basicsAccordion"
                    >
                      <div className="card-body px-4 pt-0">
                        {/* Fact List */}
                        <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">Subtotal</span>
                            <span className="text-secondary">Rp. {price}</span>
                          </li>
                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">
                              Extra Price
                            </span>
                            <span className="text-secondary">€0,00</span>
                          </li>
                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">Tax</span>
                            <span className="text-secondary">0 %</span>
                          </li>
                          <li className="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                            <span className="font-weight-bold">Pay Amount</span>
                            <span>
                              Rp.{" "}
                              {formatRupiah(total.item.price * total.duration)}
                            </span>
                          </li>
                        </ul>
                        {/* End Fact List */}
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Basics Accordion */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    login: state.userReducer.isLogin,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendAlert: (msg, type) => dispatch(setAlert(msg, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
