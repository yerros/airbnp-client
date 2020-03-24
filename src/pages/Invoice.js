/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from "react";
import moment from "moment";
import { Get } from "../config";
import Layout from "../component/Layout";

export default class Invoice extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      order: "",
      status: "",
      payment_url: ""
    };
  }
  componentDidMount() {
    this.getOrder();
  }

  getOrder = () => {
    Get(`order/${this.props.match.params.id}`).then(res => {
      this.setState({ order: res, status: res.status, isLoading: false });
      Get(`order/get/token?id=${res._id}&amount=${res.amount}`).then(
        resulst => {
          console.log(resulst);
          this.setState({ payment_url: resulst.redirect });
        }
      );
    });
  };

  PayButton = () => {
    if (this.state.status === "unpaid") {
      return (
        <div className="pt-4 pb-5 px-5 border-bottom">
          <h5
            id="scroll-description"
            className="font-size-21 font-weight-bold text-dark mb-3"
          >
            Payment
          </h5>
          <p>
            Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus
            neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a
            nunc molestie consectetur. Nulla eu urna in nisi adipiscing
            placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut
            dictum quis.
          </p>
          <a
            href={this.state.payment_url}
            className="text-underline text-primary"
          >
            <img
              style={{ maxWidth: 200 }}
              src="https://ridgechristian.info/wp-content/uploads/2016/09/Click-to-Pay.jpg"
            />
          </a>
        </div>
      );
    }
  };

  render() {
    const { _id, amount, payment_method, status } = this.state.order;
    const { city, country, phone } = this.state.order.billing || "";
    const { firstname, lastname, email } = this.state.order.guest || "";
    const { title, images, address } = this.state.order.property || "";
    const { out } = this.state.order.booking_date || "";
    return (
      <Layout>
        <div className="container">
          {this.state.isLoading ? (
            <div className="text-center">
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-8 col-xl-9">
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
                        <span className="text-secondary text-right">{_id}</span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Status</span>
                        <span className="text-center text-uppercase">
                          {status}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">First name</span>
                        <span className="text-secondary text-right">
                          {firstname}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Last name</span>
                        <span className="text-secondary text-right">
                          {lastname}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">
                          E-mail address
                        </span>
                        <span className="text-secondary text-right">
                          {email}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Town / City</span>
                        <span className="text-secondary text-right">
                          {city}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Country</span>
                        <span className="text-secondary text-right">
                          {country}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Phone</span>
                        <span className="text-secondary text-right">
                          {phone}
                        </span>
                      </li>
                    </ul>
                    {/* End Fact List */}
                  </div>
                  {this.PayButton()}
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="shadow-soft bg-white rounded-sm">
                  <div className="pt-5 pb-3 px-5 border-bottom">
                    <a href="#" className="d-block mb-3">
                      <img
                        className="img-fluid rounded-sm"
                        src={images}
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
                      <i className="icon flaticon-pin-1 mr-2 font-size-15" />{" "}
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
                                Check In <br />
                                {moment(
                                  this.state.order.booking_date.in
                                ).format("LL")}
                              </span>
                            </li>
                            <li className="d-flex justify-content-between py-2">
                              <span className="font-weight-medium">
                                Check Out <br /> {moment(out).format("LL")}
                              </span>
                            </li>
                          </ul>
                          {/* End Fact List */}
                        </div>
                      </div>
                    </div>
                    {/* End Card */}

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
                            <li className="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                              <span className="font-weight-bold">
                                Pay Amount
                              </span>
                              <span>Rp. {amount}</span>
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
          )}
        </div>
      </Layout>
    );
  }
}
