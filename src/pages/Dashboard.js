import React, { Component } from "react";
import moment from "moment";
import LayoutAccount from "../component/LayoutAccount";
import { Get, month, yesterday, year, today, threeMount } from "../config";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      this_month: 0,
      last_3_month: 0,
      this_year: 0,
      total: 0
    };
  }

  componentDidMount() {
    this.getOrders();
  }
  getOrders() {
    Get("order/host/booking").then(res => {
      const paid = res.filter(item => item.status === "paid");
      this.setState({ orders: paid });
    });
  }

  sumTotal(order) {
    let total = 0;
    order.map(item => (total += item.amount));
    return this.formatRupiah(total);
  }

  sumThisMonth(order) {
    const thisMount = order.filter(item => {
      const val = moment(item.create_at).format();
      return moment(val).isBetween(month, yesterday);
    });

    let total = 0;
    thisMount.map(item => (total += item.amount));
    return this.formatRupiah(total);
  }

  sumTLast3Month(order) {
    const thisMount = order.filter(item => {
      const val = moment(item.create_at).format();
      return moment(val).isBetween(threeMount, yesterday);
    });

    let total = 0;
    thisMount.map(item => (total += item.amount));
    return this.formatRupiah(total);
  }

  sumThisYear(order) {
    const thisMount = order.filter(item => {
      const val = moment(item.create_at).format();
      return moment(val).isBetween(year, yesterday);
    });

    let total = 0;
    thisMount.map(item => (total += item.amount));
    return this.formatRupiah(total);
  }

  formatRupiah(rupiah) {
    var reverse = rupiah
      .toString()
      .split("")
      .reverse()
      .join("");
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan
      .join(".")
      .split("")
      .reverse()
      .join("");
    return ribuan;
  }

  render() {
    const { this_month, last_3_month, this_year, total } = this.state;
    return (
      <LayoutAccount>
        <div className="container">
          <h4 className="text-size-21 font-weight-semi-bold text-gray-3 mb-3 pb-1">
            MyAccount
          </h4>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card border-left-primary bg-light shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center text-dark">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold mb-1">
                        This Month
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-primary">
                        <small>
                          Rp. {this.sumThisMonth(this.state.orders)}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card border-left-primary bg-light shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center text-dark">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold mb-1">
                        Last 3 Month
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-primary">
                        <small>
                          Rp. {this.sumTLast3Month(this.state.orders)}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card border-left-primary bg-light shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center text-dark">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold mb-1">
                        This Year
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-primary">
                        <small>Rp. {this.sumThisYear(this.state.orders)}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card border-left-primary bg-light shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center text-dark">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold mb-1">
                        Total Revenue
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-primary">
                        <small>Rp. {this.sumTotal(this.state.orders)}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAccount>
    );
  }
}
