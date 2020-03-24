import React, { Component } from "react";
import { Get } from "../config";
import moment from "moment";
import LayoutAccount from "../component/LayoutAccount";

export default class MyOrder extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    };
  }
  componentDidMount() {
    this.getOrder();
  }
  getOrder = () => {
    Get("order/single/user").then(res => {
      this.setState({ orders: res });
    });
  };
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
                <th scope="col">Client</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((item, i) => {
                let status;
                if (item.status === "paid") {
                  status = "success";
                } else {
                  status = "danger";
                }
                return (
                  <tr key={item._id}>
                    <th scope="row">
                      <span className="btn btn-sm btn-icon btn-soft-secondary rounded-circle mr-2">
                        <span className="btn-icon__inner font-weight-medium">
                          {i + 1}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle">
                      <a href={`/invoice/${item._id}`}>
                        <div className="media align-items-center">
                          {item.property.title}
                        </div>
                      </a>
                    </td>
                    <td className="align-middle text-primary">
                      Rp. {item.amount}
                    </td>
                    <td className="align-middle text-secondary">
                      {moment(item.create_at).format("YYYY-MM-DD")}
                    </td>
                    <td className="align-middle">
                      <span className={`badge badge-${status} text-uppercase`}>
                        {item.status}
                      </span>
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
