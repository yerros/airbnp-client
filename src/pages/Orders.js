import React, { Component } from "react";
import moment from "moment";
import LayoutAccount from "../component/LayoutAccount";
import { Get } from "../config";
import { Link } from "react-router-dom";

export default class Orders extends Component {
  constructor() {
    super();
    this.state = {
      bookings: []
    };
  }

  componentDidMount() {
    this.getBookings();
  }
  getBookings() {
    Get("order/host/booking").then(res => this.setState({ bookings: res }));
  }
  render() {
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            Orders
          </h4>
          <table className="table table-light">
            <thead>
              <tr>
                <th scope="col" style={{ width: "8%" }}>
                  #
                </th>
                <th scope="col">Property</th>
                <th scope="col">Amount</th>
                <th scope="col">Order Date</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bookings.map((item, i) => {
                const { firstname, lastname } = item.guest;
                let status;
                let showLink;
                if (item.status === "paid") {
                  status = "success";
                  showLink = (
                    <Link to={`/invoice/${item._id}`}>
                      <span className="badge badge-dark ml-1">
                        <i className="fas fa-eye"></i> View
                      </span>
                    </Link>
                  );
                } else {
                  status = "danger";
                }
                return (
                  <tr>
                    <th scope="row">
                      <span className="btn btn-sm btn-icon btn-soft-secondary rounded-circle mr-2">
                        <span className="btn-icon__inner font-weight-medium">
                          {i + 1}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle">
                      <div className="media align-items-center">
                        {firstname + " " + lastname}
                      </div>
                    </td>
                    <td className="align-middle">
                      <div
                        className="media align-items-center"
                        style={{ maxWidth: 200 }}
                      >
                        {item.property.title}
                      </div>
                    </td>
                    <td className="align-middle text-primary">
                      Rp. {item.amount}
                    </td>
                    <td className="align-middle text-secondary">
                      <small className="d-block">
                        {moment(item.create_at).format("LL")}
                      </small>
                    </td>
                    <td className="align-middle text-secondary">
                      <small className="d-block">
                        <span className="badge badge-info">Check in </span>:{" "}
                        {moment(item.booking_date.in).format("LL")}
                      </small>
                      <small className="d-block">
                        <span className="badge badge-warning">Check out</span>:{" "}
                        {moment(item.booking_date.out).format("LL")}
                      </small>
                    </td>
                    <td className="align-middle">
                      <span className={`badge badge-${status}`}>
                        {item.status}
                      </span>
                      {showLink}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </LayoutAccount>
    );
  }
}
